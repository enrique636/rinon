import { NextResponse } from "next/server";
import { ADMIN_COOKIE, getAdminToken, isValidAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const form = await request.formData();
  if (!isValidAdminPassword(String(form.get("password") ?? ""))) return NextResponse.redirect(new URL("/admin?error=1", request.url), 303);
  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set(ADMIN_COOKIE, getAdminToken()!, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/admin", maxAge: 28_800 });
  return response;
}
