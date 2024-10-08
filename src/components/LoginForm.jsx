"use client";
import React from "react";
import { useFormState } from "react-dom";
import LoginButton from "@/components/LoginButton";
import { loginUser } from "@/actions/loginUserAction";

const LoginForm = () => {
  const [formState, formAction] = useFormState(loginUser, {});

  console.log(formState);

  return (
    <form action={formAction} className="flex flex-col gap-4 w-[420px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="john.doe@gmail.com"
          name="email"
          id="email"
          className="border border-indigo-600 rounded-md py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="somePassword12$%"
          name="password"
          id="password"
          className="border border-indigo-600 rounded-md py-2 px-4"
        />
      </div>
      <LoginButton />
    </form>
  );
};

export default LoginForm;
