// components/sections/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import { FileSpreadsheet, MessageCircle } from "lucide-react";

type HeroProps = {
  id?: string;
  name?: string;
  headlineH1?: string;
  subheadlineH2?: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  profileImageSrc?: string;
  profileImageAlt?: string;
};

export default function Hero({
  id = "hero",
  name = "Waheed Arshad",
  headlineH1 = "Excel Expert for Automation & Business Reporting",
  subheadlineH2 =
    "I help businesses eliminate manual Excel work, clean complex data, and build reports they can trust.",
  bullets = [
    "20+ years hands-on Excel experience",
    "Automation, Dashboards & VBA",
    "Trusted by 500+ global clients",
  ],
  ctaText = "View Case Studies",
  ctaHref = "#projects",
  profileImageSrc = "/images/profile.jpg",
  profileImageAlt = "Waheed Arshad – Excel Expert",
}: HeroProps) {
  return (
    <section
      id={id}
      aria-label="Excel Expert Hero Section"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-50"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-wide text-emerald-700">
              {name}
            </p>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-emerald-900 sm:text-4xl lg:text-5xl">
              {headlineH1}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0">
              {subheadlineH2}
            </p>

            {/* BULLETS */}
            <ul className="mx-auto mt-6 max-w-md space-y-3 text-left lg:mx-0">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              {/* View Case Studies */}
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
              >
                <FileSpreadsheet size={18} />
                {ctaText}
              </Link>

              {/* Contact on WhatsApp */}
              <Link
                href="https://wa.me/923336630418"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-700 px-7 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                <MessageCircle size={18} />
                Contact on WhatsApp
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE – MOBILE OPTIMIZED */}
          <div className="relative mx-auto w-full max-w-[220px] sm:max-w-sm md:max-w-md">
            <div className="relative rounded-2xl bg-emerald-700/10 p-1.5 shadow-lg sm:rounded-3xl sm:p-2">
              <Image
                src="/images/profile2.jpg"
                alt={profileImageAlt}
                width={420}
                height={520}
                priority
                className="rounded-xl object-cover sm:rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
