// models/Project.ts
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true },
    title: String,
    overview: String,
    problem: String,
    approach: String,
    tools: [String],
    result: String,
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
