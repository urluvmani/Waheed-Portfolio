import { NextResponse } from "next/server";
import { signToken, verifyAdminCredentials } from "@/app/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email?.trim();
  const password = body?.password;

  if (!email || !password) {
    return NextResponse.json({ message: "Email aur password required hai" }, { status: 400 });
  }

  const ok = await verifyAdminCredentials(email, password);
  if (!ok) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email, role: "admin" });

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "admin_token",
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
