import Link from "next/link";
import React from "react";
import { userWithCookies } from "@/lib/getUser";
import { logoutUser } from "@/actions/logoutUserAction";

const Navbar = async () => {
  const userLogin = await userWithCookies();
  return (
    <header className="w-full h-auto py-2 sm:h-16 sm:py-0 flex items-center justify-center bg-gray-200 border-b border-gray-400 shadow-sm">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link
          href={"/"}
          className="font-bold text-xl md:text-2xl text-gray-700"
        >
          TheNextAuth
        </Link>
        <nav className="w-full flex items-center gap-4 justify-center sm:justify-end">
          {userLogin && (
            <div className="flex items-center justify-between w-full sm:justify-end gap-2 sm:gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href={"/dashboard"}
                  className="text-gray-700 underline font-semibold text-sm md:text-base"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/projects"}
                  className="text-gray-700 underline font-semibold text-sm md:text-base"
                >
                  Projects
                </Link>
              </div>
              <form action={logoutUser}>
                <button className="bg-gray-700 text-white rounded-md py-1 md:py-2 px-3 md:px-4 ">
                  Logout
                </button>
              </form>
            </div>
          )}
          {!userLogin && (
            <>
              <Link
                href={"/register"}
                className="bg-gray-700 text-white rounded-md py-1 md:py-2 px-3 md:px-4 "
              >
                Register
              </Link>
              <Link
                href={"/login"}
                className="bg-green-700 text-white rounded-md py-1 md:py-2 px-3 md:px-4"
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
