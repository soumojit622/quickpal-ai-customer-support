import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code not found" },
        { status: 400 },
      );
    }

    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

    const session = await scalekit.authenticateWithCode(code, redirectUri);

    // console.log("Authentication successful, session:", session);

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Authentication failed: No access token received" },
        { status: 500 },
      );
    }

    const response = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}`,
    );

    response.cookies.set("access_token", session.accessToken, {
      httpOnly: true,
      // TODO: Set secure to true in production and ensure your app is served over HTTPS
      secure: false, // Set to true in production
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Authentication error:", error);

    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 },
    );
  }
}
