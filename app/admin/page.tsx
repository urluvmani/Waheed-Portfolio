  import Link from "next/link";

  const cards = [
    {
      title: "Hero Section",
      desc: "Landing hero content edit karein",
      href: "/admin/hero",
    },
    {
      title: "About Section",
      desc: "About me paragraphs aur tools manage karein",
      href: "/admin/about",
    },
    {
      title: "Education",
      desc: "Education entries add / update karein",
      href: "/admin/education",
    },
    {
      title: "Experience",
      desc: "Experience cases manage karein",
      href: "/admin/experience",
    },
    {
      title: "Projects",
      desc: "Projects add aur update karein",
      href: "/admin/projects",
    },
  ];

  export default function AdminDashboard() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <p className="text-sm text-gray-600">
          Neeche se kisi bhi section ko manage karein
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{c.desc}</p>

              <span className="mt-3 inline-block text-sm font-medium text-black">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
