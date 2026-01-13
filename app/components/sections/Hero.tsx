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
      className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800"
    >
      {/* subtle grid / noise feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-sm block md:hidden pt-10 md:pt-0 font-semibold tracking-widest text-gray-400 uppercase">
              {name}
            </p>

            <h1 className="mt-4 md:mt-0 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {headlineH1}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
              {subheadlineH2}
            </p>

            {/* BULLETS */}
            <ul className="mx-auto mt-7 max-w-md space-y-4 text-left lg:mx-0">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTONS */}
            <div className="mt-10 md:mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-gray-200"
              >
                <FileSpreadsheet size={18} />
                {ctaText}
              </Link>

              <Link
                href="https://wa.me/923336630418"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-gray-500 px-7 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Contact on WhatsApp
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[230px] sm:max-w-sm md:max-w-md">
            <div className="relative rounded-3xl  shadow-2xl">
              <Image
                src="/images/profile2.jpg"
                alt={profileImageAlt}
                width={420}
                height={520}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
