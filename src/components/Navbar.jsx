import Link from "next/link";
import React from "react";
import { userWithCookies } from "@/lib/getUser";
import { logoutUser } from "@/actions/logoutUserAction";

const Navbar = async () => {
  const userLogin = await userWithCookies();
  return (
    <header className="w-full h-16 flex items-center justify-center bg-gray-200 border-b border-gray-400 shadow-sm">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-8">
        <Link href={"/"} className="font-bold text-2xl text-gray-700">
          TheNextAuth
        </Link>
        <nav className="flex items-center gap-4">
          {userLogin && (
            <div className="flex items-center gap-4">
              <Link
                href={"/dashboard"}
                className="text-gray-700 underline font-semibold"
              >
                Dashboard
              </Link>
              <Link
                href={"/projects"}
                className="text-gray-700 underline font-semibold"
              >
                Projects
              </Link>
              <form action={logoutUser}>
                <button className="bg-gray-700 text-white rounded-md py-2 px-4">
                  Logout
                </button>
              </form>
            </div>
          )}
          {!userLogin && (
            <>
              <Link
                href={"/register"}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              >
                Register
              </Link>
              <Link
                href={"/login"}
                className="bg-green-700 text-white rounded-md py-2 px-4"
              >
                Log In
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
