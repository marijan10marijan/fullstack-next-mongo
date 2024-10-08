"use client";
import React from "react";
import { useFormState } from "react-dom";
import RegisterButton from "@/components/RegisterButton";
import { registerUser } from "@/actions/registerUserAction";

const RegisterForm = () => {
  const [formState, formAction] = useFormState(registerUser, {});


  return (
    <form action={formAction} className="flex flex-col gap-4 w-[420px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="john99"
          name="username"
          id="username"
          className="border border-indigo-600 rounded-md py-2 px-4"
        />
        {formState?.errors?.username?.map((error) => (
          <p key={error} className="text-red-500 font-bold text-xs">
            {error}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="john.doe@gmail.com"
          name="email"
          id="email"
          className="border border-indigo-600 rounded-md py-2 px-4"
        />
        {formState?.errors?.email && (
          <p className="text-red-500 font-bold text-xs">
            {formState?.errors?.email}
          </p>
        )}
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
        {formState?.errors?.password?.map((error) => (
          <p key={error} className="text-red-500 font-bold text-xs">
            {error}
          </p>
        ))}
      </div>
      <RegisterButton />
    </form>
  );
};

export default RegisterForm;
