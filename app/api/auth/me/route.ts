import { NextResponse } from "next/server";
import { getAuthFromCookies } from "@/app/lib/auth";

export async function GET() {
  const auth = await getAuthFromCookies();
  if (!auth) return NextResponse.json({ loggedIn: false }, { status: 401 });

  return NextResponse.json({ loggedIn: true, user: auth });
}
