// app/api/hero/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "../../lib/db";
import Hero from "../../models/Hero";

export async function GET() {
  await dbConnect();
  const hero = await Hero.findOne().lean();
  return NextResponse.json(hero);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  await Hero.deleteMany({});
  const hero = await Hero.create(body);

  return NextResponse.json(hero);
}
