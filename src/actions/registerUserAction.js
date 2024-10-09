"use server";
import { getCollection } from "@/lib/dbConnection";
import { z } from "zod";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const usernameValidation = new RegExp(/^[a-zA-Z0-9]*$/);
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const schema = z.object({
  username: z
    .string()
    .min(3, "Username needs to contain at least 3 charachter")
    .max(30, "Username can't have more than 30 charachter")
    .regex(usernameValidation, "Username can only include letters and numbers"),
  email: z.string().email("Invalid email adress"),
  password: z
    .string()
    .min(8, "Password needs to contain at least 8 charachter")
    .max(50, "Password can't have more than 50 charachter")
    .regex(
      passwordValidation,
      "Password must contain lowercase and uppercase letter, number and one special charachter"
    ),
});

export const registerUser = async (prevState, formData) => {
  const user = schema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!user.success) {
    return {
      errors: user.error.flatten().fieldErrors,
    };
  }

  /* HASH PASSWORD *************************************************************/
  user.data.password = await bcrypt.hash(user.data.password, 10);

  /* GET DATABASE COLLECTION ***************************************************/
  const collection = await getCollection("users");

  /* CHECK IS EMAIL EXIST ******************************************************/
  const isUserExists = await collection.findOne({
    "data.email": user.data.email,
  });

  if (isUserExists) {
    return {
      success: false,
      errors: {
        email: ["Email already exists, try a different one"],
      },
    };
  }

  /* CREATE USER IN DATABASE ***************************************************/
  const newUser = await collection.insertOne(user);
  const userId = newUser.insertedId.toString();

  /* CREATE JWT  ****************************************************************/
  const token = jwt.sign(
    { exp: Math.floor(new Date() / 1000) + 60 * 60 * 24, userId: userId },
    process.env.JWT_SECRET
  );

  /* CREATE COOKIE *************************************************************/
  cookies().set("customNextAuthCookie", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  return redirect("/dashboard");
};
