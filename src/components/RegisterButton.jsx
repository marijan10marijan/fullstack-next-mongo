"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-indigo-600 text-white font-bold rounded-md py-2 px-4 disabled:bg-gray-600"
      disabled={pending}
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};

export default RegisterButton;
