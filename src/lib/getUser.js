import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const userWithCookies = async () => {
  const theCookie = cookies().get("customNextAuthCookie")?.value;

  if (theCookie) {
    try {
      const decode = jwt.verify(theCookie, process.env.JWT_SECRET);
      return decode;
    } catch (err) {
      return null;
    }
  }
};
