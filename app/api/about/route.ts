import { NextResponse } from "next/server";
import { dbConnect } from "../../lib/db";
import About from "../../models/About";

export async function GET() {
  await dbConnect();

  const about = await About.findOne().lean();

  if (!about) {
    return NextResponse.json(
      { message: "About content not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    heading: about.heading,
    paragraphs: about.paragraphs,
    tools: about.tools,
  });
}
