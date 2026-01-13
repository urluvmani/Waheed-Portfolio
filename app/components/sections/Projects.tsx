// components/sections/Projects.tsx
// Server Component
// Balanced Black & White Projects section (Trusted Version)

import Link from "next/link";
import {
  FileSpreadsheet,
  Settings,
  BarChart3,
  Clock,
  TrendingUp,
} from "lucide-react";

type Project = {
  slug: string;
  title: string;
  problem: string;
  tools: string[];
  result: string;
};

type ProjectsProps = {
  id?: string;
  heading?: string;
  projects?: Project[];
};

export default function Projects({
  id = "projects",
  heading = "Excel Projects & Case Studies",
  projects = [],
}: ProjectsProps) {
  if (!projects.length) return null;

  return (
    <section
      id={id}
      aria-label="Excel Projects and Case Studies"
      className="relative w-full scroll-mt-16 bg-neutral-300"
    >
      {/* soft top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">

        {/* SECTION INTRO */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-white text-shadow-2xl text-xl">
            Proven Excel solutions that improve accuracy, save time, and support
            confident business decisions.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <article
              key={p.slug}
              className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              {/* ICON */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                {index % 3 === 0 && (
                  <FileSpreadsheet className="h-6 w-6 text-gray-900" />
                )}
                {index % 3 === 1 && (
                  <Settings className="h-6 w-6 text-gray-900" />
                )}
                {index % 3 === 2 && (
                  <BarChart3 className="h-6 w-6 text-gray-900" />
                )}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {p.title}
              </h3>

              {/* CONTENT */}
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Problem:</span>{" "}
                  {p.problem}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Result:</span>{" "}
                  {p.result}
                </p>
              </div>

              {/* TOOLS */}
              {p.tools?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {/* IMPACT TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  <Clock size={12} /> Time Saved
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  <TrendingUp size={12} /> Better Insights
                </span>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-7">
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-sm border p-2 rounded-md  text-gray-900 transition hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-gray-200"
          >
            <FileSpreadsheet size={18} />
            Explore My Experience
          </Link>

          <Link
            href="https://wa.me/923336630418"
            target="_blank"
            className="inline-flex items-center font-bold gap-2 rounded-full border border-white px-7 py-3 text-sm  text-white transition hover:bg-white/10"
          >
            <TrendingUp size={18} />
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
