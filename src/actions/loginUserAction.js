"use server";

import { getCollection } from "@/lib/dbConnection";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const loginUser = async (prevState, formData) => {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  if (typeof user.email != "string") user.email = "";
  if (typeof user.password != "string") user.password = "";

  const collection = await getCollection("users");
  const isUser = await collection.findOne({
    "data.email": user.email,
  });
  if (!isUser) {
    return {
      success: false,
      errors: "Invalid email or password",
    };
  }
  const isMatch = await bcrypt.compare(user.password, isUser.data.password);
  if (!isMatch) {
    return {
      success: false,
      errors: "Invalid email or password",
    };
  }

  /* CREATE JWT  ****************************************************************/
  const token = jwt.sign(
    { exp: Math.floor(new Date() / 1000) + 60 * 60 * 24, userId: isUser._id },
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
