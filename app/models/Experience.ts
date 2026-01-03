// models/Experience.ts
import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    title: String,
    problem: String,
    solution: String,
    result: String,
  },
  { timestamps: true }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
