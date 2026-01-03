// app/api/experience/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "../../lib/db";
import Experience from "../../models/Experience";

export async function GET() {
  await dbConnect();
  const items = await Experience.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const item = await Experience.create(body);
  return NextResponse.json(item);
}
