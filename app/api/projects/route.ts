// app/api/projects/route.ts

import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import Project from "@/app/models/Project";

export async function GET() {
  await dbConnect();
  const items = await Project.find().lean();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const item = await Project.create(body);
  return NextResponse.json(item);
}
