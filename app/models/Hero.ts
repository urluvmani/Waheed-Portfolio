// models/Hero.ts
import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
  {
    name: String,
    headlineH1: String,
    subheadlineH2: String,
    bullets: [String],
    ctaText: String,
    profileImageSrc: String,
  },
  { timestamps: true }
);

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
