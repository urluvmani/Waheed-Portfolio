import { notFound } from "next/navigation";
import { dbConnect } from "@/app/lib/db";
import Project from "@/app/models/Project";
import Link from "next/link";

import FadeIn from "@/app/components/ui/FadeIn";
import {
  AlertCircle,
  Wrench,
  Target,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await dbConnect();
  const project = await Project.findOne({ slug }).lean();

  if (!project) return notFound();

  return (
    <main className="bg-white">
      
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-14">

     <FadeIn>
  <header className="space-y-4 border-b pb-10">

    {/* BACK BUTTON */}
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
    >
      ← Back to Home
    </Link>

    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
      {project.title}
    </h1>

    <p className="text-lg text-gray-600 leading-relaxed">
      {project.overview}
    </p>
  </header>
</FadeIn>

        {/* PROBLEM */}
        <FadeIn delay={0.1}>
          <section className="flex gap-4">
            <div className="pt-1">
              <AlertCircle className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Problem
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </section>
        </FadeIn>

        {/* APPROACH */}
        <FadeIn delay={0.2}>
          <section className="flex gap-4">
            <div className="pt-1">
              <Layers className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Approach
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </section>
        </FadeIn>

        {/* TOOLS */}
        <FadeIn delay={0.3}>
          <section className="flex gap-4">
            <div className="pt-1">
              <Wrench className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Tools Used
              </h2>

              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.tools?.map((tool: string) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2 rounded-md border px-3 py-2 text-gray-700 text-sm"
                  >
                    <Target className="h-4 w-4 text-gray-900" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* RESULT */}
        <FadeIn delay={0.4}>
          <section className="flex gap-4 border-t pt-10">
            <div className="pt-1">
              <CheckCircle2 className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Result
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {project.result}
              </p>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
