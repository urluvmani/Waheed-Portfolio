// models/Education.ts
import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Education ||
  mongoose.model("Education", EducationSchema);
