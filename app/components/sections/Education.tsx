// components/sections/Education.tsx
// Server Component friendly
// Trusted Education & Certifications section

type EducationItem = {
  title: string;
  institution?: string;
  description: string;
};

type EducationProps = {
  id?: string;
  heading?: string;
  items?: EducationItem[];
};

export default function Education({
  id = "education",
  heading = "Education & Certifications",
  items = [
    {
      title: "Professional Experience in Microsoft Excel",
      description:
        "Over 20 years of practical experience using Microsoft Excel for business analysis, reporting, and automation.",
    },
    {
      title: "Advanced Excel & Data Analysis",
      description:
        "Hands-on expertise in advanced formulas, Pivot Tables, Power Query, and structured data models.",
    },
    {
      title: "Excel Automation & VBA",
      description:
        "Design and maintenance of VBA-based automation for reports, calculations, and workflow optimization.",
    },
    {
      title: "Continuous Learning & Skill Development",
      description:
        "Ongoing learning and application of modern Excel features for dashboards, performance tracking, and decision support.",
    },
  ],
}: EducationProps) {
  return (
    <section
      id={id}
      aria-label="Education and Excel Certifications"
      className="relative w-full scroll-mt-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:py-24">

        {/* SECTION HEADING */}
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {heading}
        </h2>

        {/* EDUCATION CARDS */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="h-full rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {item.institution && (
                <p className="mt-1 text-sm text-gray-600">
                  {item.institution}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
