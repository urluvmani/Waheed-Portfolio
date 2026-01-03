import { NextResponse } from "next/server";
import { dbConnect } from "../../lib/db";
import Education from "../../models/Education";

export async function GET() {
  await dbConnect();
  const items = await Education.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const item = await Education.create(body);
  return NextResponse.json(item);
}
