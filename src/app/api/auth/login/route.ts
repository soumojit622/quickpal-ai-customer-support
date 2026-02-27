import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
  const authUrl = scalekit.getAuthorizationUrl(redirectUri);
//   console.log("Redirecting to:", authUrl);
  return NextResponse.redirect(authUrl);
}
