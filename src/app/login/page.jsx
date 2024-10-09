import LoginForm from "@/components/LoginForm";
import { userWithCookies } from "@/lib/getUser";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const userLogin = await userWithCookies();

  if (userLogin) {
    return redirect("/");
  }
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-2 md:mb-4 text-center">
        <span className="text-indigo-800 font-bold"> Login!</span>
      </h1>
      <LoginForm />
      <Link href={"/register"} className="text-xs font-semibold text-gray-600">
        Don't have an account? Register!
      </Link>
    </div>
  );
};

export default LoginPage;
