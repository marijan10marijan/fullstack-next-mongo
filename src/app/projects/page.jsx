import { userWithCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";
import React from "react";

const ProjectsPage = async () => {
  const userLogin = await userWithCookies();

  if (!userLogin) {
    return redirect("/login");
  }

  return (
    <div className="py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Projects Page</h1>
      <p className="text-base sm:text-lg text-center">This page is visible only to login user!!</p>
    </div>
  );
};

export default ProjectsPage;
