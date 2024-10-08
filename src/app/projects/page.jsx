import { userWithCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";
import React from "react";

const ProjectsPage = async () => {
  const userLogin = await userWithCookies();

  if (!userLogin) {
    return redirect("/login");
  }

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-center">Projects Page</h1>
    </div>
  );
};

export default ProjectsPage;
