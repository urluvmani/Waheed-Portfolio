// components/sections/Experience.tsx
// Server Component friendly
// Trusted Experience section – Light Gray Theme

import {
  FileSpreadsheet,
  Settings,
  BarChart3,
  TrendingUp,
  Clock,
} from "lucide-react";
import Link from "next/link";

type ExperienceItem = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

type ExperienceProps = {
  id?: string;
  heading?: string;
  items?: ExperienceItem[];
};

export default function Experience({
  id = "experience",
  heading = "Professional Experience",
  items = [
    {
      title: "Excel Data Cleaning & Structuring",
      problem:
        "Businesses were working with messy, unstructured Excel files that caused reporting errors and delays.",
      solution:
        "Cleaned and standardized raw data using advanced Excel formulas and Power Query.",
      result:
        "Accurate reports, reduced manual effort, and improved decision-making speed.",
    },
    {
      title: "Excel Automation & VBA Solutions",
      problem:
        "Manual Excel tasks were consuming hours of repetitive work every week.",
      solution:
        "Developed VBA-based automation for reports, calculations, and file processing.",
      result:
        "Saved significant time, minimized human errors, and improved workflow efficiency.",
    },
    {
      title: "Dashboards & Business Reporting",
      problem:
        "Management lacked clear visibility into performance due to static spreadsheets.",
      solution:
        "Built dynamic Excel dashboards with KPIs, charts, and automated data refresh.",
      result:
        "Clear insights, faster reviews, and better strategic decisions.",
    },
  ],
}: ExperienceProps) {
  return (
    <section
      id={id}
      aria-label="Professional Excel Experience"
      className="relative w-full scroll-mt-16 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">

        {/* HEADING */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-gray-700">
            Real-world Excel solutions focused on accuracy, speed, and business impact.
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              {/* ICON */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                {index === 0 && (
                  <FileSpreadsheet className="h-6 w-6 text-gray-900" />
                )}
                {index === 1 && (
                  <Settings className="h-6 w-6 text-gray-900" />
                )}
                {index === 2 && (
                  <BarChart3 className="h-6 w-6 text-gray-900" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* CONTENT */}
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Problem:</span>{" "}
                  {item.problem}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Solution:</span>{" "}
                  {item.solution}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Result:</span>{" "}
                  {item.result}
                </p>
              </div>

              {/* IMPACT TAGS */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  <Clock size={12} /> Time Saved
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  <TrendingUp size={12} /> Better Decisions
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 flex justify-center gap-8 flex-wrap">
          <div className="rounded-2xl bg-white p-6 text-center w-auto md:w-[20vw] border border-gray-200 shadow-sm">
            <p className="text-3xl font-extrabold text-gray-900">60–70%</p>
            <p className="mt-1 text-sm text-gray-600">
              Reporting Time Reduced
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center w-auto md:w-[20vw] border border-gray-200 shadow-sm">
            <p className="text-3xl font-extrabold text-gray-900">99%</p>
            <p className="mt-1 text-sm text-gray-600">
              Data Accuracy Achieved
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gray-800"
          >
            <FileSpreadsheet size={18} />
            View Case Studies
          </Link>

          <Link
            href="https://wa.me/923336630418"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            <TrendingUp size={18} />
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
