import { cookies } from "next/headers";
import { scalekit } from "./scalekit";

export async function getSession(request: unknown) {
  const session = await cookies();

  const token = session.get("access_token")?.value;

  //   console.log("Token from getSession:", token);
  if (!token) {
    return null;
  }

  try {
    const result: any = await scalekit.validateToken(token);
    // console.log("Result from validateToken:", result);
    const user = await scalekit.user.getUser(result.sub);
    return user;
  } catch (error) {
    console.error("Error validating token:", error);
  }
}
