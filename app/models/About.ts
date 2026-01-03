// models/About.ts
import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    paragraphs: [String],
    tools: [String],
  },
  { timestamps: true }
);

export default mongoose.models.About || mongoose.model("About", AboutSchema);
