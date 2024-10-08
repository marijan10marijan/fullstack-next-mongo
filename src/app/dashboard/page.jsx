import { userWithCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";
import React from "react";

const DasboardPage = async () => {
  const userLogin = await userWithCookies();

  if (!userLogin) {
    return redirect("/login");
  }
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-center">Dasboard Page</h1>
    </div>
  );
};

export default DasboardPage;
