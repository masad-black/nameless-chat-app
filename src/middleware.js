import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // user is not logged in redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/auth/register", request.url));
  }

  return NextResponse.next();
}

// this define where the middleware would be applied
export const config = {
  matcher: ["/", "/conversations"],
};
