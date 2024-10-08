"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-indigo-600 text-white font-bold rounded-md py-2 px-4 disabled:bg-gray-600"
      disabled={pending}
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
};

export default LoginButton;
