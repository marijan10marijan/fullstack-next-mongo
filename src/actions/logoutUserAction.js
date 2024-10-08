"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutUser = async () => {
  cookies().delete("customNextAuthCookie");
  return redirect("/login");
};
