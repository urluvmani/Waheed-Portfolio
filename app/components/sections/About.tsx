// components/sections/About.tsx
// SEO-safe, Server Component friendly
// Premium About section for Excel Expert

import { FileSpreadsheet, Settings, BarChart3, Award } from "lucide-react";
import Link from "next/link";

type AboutProps = {
  id?: string;
  heading?: string;
  paragraphs?: string[];
  tools?: string[];
};

export default function About({
  id = "about",
  heading = "About the Excel Expert",
  paragraphs = [
    "I am an Excel specialist with over two decades of hands-on experience helping businesses work smarter with data.",
    "My work focuses on solving real operational problems such as messy data, manual reporting, slow workflows, and decision-making based on unclear numbers.",
    "I design structured Excel solutions that improve accuracy, save time, and provide clear visibility into business performance.",
  ],
  tools = [
    "Microsoft Excel (Advanced Formulas)",
    "Excel VBA Automation",
    "Power Query & Data Cleaning",
    "Dashboards & Business Reporting",
  ],
}: AboutProps) {
  return (
    <section
      id={id}
      aria-label="About the Excel Expert"
      className="relative w-full scroll-mt-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">

        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className=" p-2 md:p-10">
            <h2 className="text-2xl font-extrabold text-emerald-900 sm:text-3xl">
              {heading}
            </h2>

            <div className="mt-6 space-y-5 text-gray-700">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed sm:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
              <div className="rounded-2xl bg-emerald-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-emerald-800">
                  30+
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Years Experience
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-emerald-800">
                  1000+
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Clients Served
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
              >
                <FileSpreadsheet size={18} />
                View Projects
              </Link>

              <Link
                href="https://wa.me/923336630418"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-700 px-7 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                <Award size={18} />
                Work With Me
              </Link>
            </div>
          </div>

          {/* RIGHT – SKILLS PANEL */}
          <div className="relative h-70 md:h-60 rounded-3xl bg-emerald-50 p-8 mt-0 md:mt-22 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Core Tools & Expertise
            </h3>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              <li className="flex items-start gap-4">
                <FileSpreadsheet className="mt-1 h-5 w-5 text-emerald-700" />
                <span className="text-sm sm:text-base text-gray-800">
                  Advanced Excel Formulas & Models
                </span>
              </li>

              <li className="flex items-start gap-4">
                <Settings className="mt-1 h-5 w-5 text-emerald-700" />
                <span className="text-sm sm:text-base text-gray-800">
                  Excel VBA Automation
                </span>
              </li>

              <li className="flex items-start gap-4">
                <BarChart3 className="mt-1 h-5 w-5 text-emerald-700" />
                <span className="text-sm sm:text-base text-gray-800">
                  Dashboards & KPI Reporting
                </span>
              </li>

              <li className="flex items-start gap-4">
                <Settings className="mt-1 h-5 w-5 text-emerald-700" />
                <span className="text-sm sm:text-base text-gray-800">
                  Power Query & Data Cleaning
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
