import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
  //   if (!isLoggedIn && request.url === "http://localhost:3000/profile") {
  //     console.log("redirecting");

  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   console.log("middleware");
  if (isLoggedIn) {
    //we can go to where we want
    console.log("redirecting to profile page");
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// config are called before the middleware

export const config = {
  matcher: ["/profile"],
};
