import Link from "next/link";
import React from "react";

import RegisterForm from "@/components/RegisterForm";
import { userWithCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const userLogin = await userWithCookies();

  if (userLogin) {
    return redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl md:text-3xl text-gray-800 font-semibold mb-2 md:mb-4 text-center px-4">
        Don't have an account?
        <span className="text-indigo-800 font-bold"> Register!</span>
      </h1>
      <RegisterForm />
      <Link href={"/login"} className="text-xs font-semibold text-gray-600">
        Already have account? Login!
      </Link>
    </div>
  );
};

export default RegisterPage;
