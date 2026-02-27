import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // If no token → redirect to home (or login page)
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Token exists → allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
