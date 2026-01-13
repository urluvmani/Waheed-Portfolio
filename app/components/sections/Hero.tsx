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
  profileImageAlt = "Excel Automation Expert Illustration",
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative min-h-[100vh] overflow-hidden flex items-center"
      aria-label="Excel Expert Hero Section"
    >
      {/* 🔹 Background Image */}
      <Image
        src="/images/profile3.png"
        alt={profileImageAlt}
        fill
        priority
        className="object-cover object-[80%_center] md:object-right opacity-30 md:opacity-100"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 md:via-black/30 md:to-black/10 to-black/80" />

      {/* 🔹 Content */}
      <div className="relative md:flex md:flex-col items-start z-10  max-w-4xl px-5 text-center md:text-start">
        <p className="mb-3  md:mt-10 text-sm font-semibold tracking-widest text-white uppercase">
          {name}
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          {headlineH1}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-white text-shadow-2xl font-semibold">
          {subheadlineH2}
        </p>

        {/* BULLETS */}
        <ul className="mx-auto md:mx-0 mt-8 max-w-md space-y-4 text-left">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-200">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-bold text-black">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-xl transition hover:bg-gray-200"
          >
            <FileSpreadsheet size={18} />
            {ctaText}
          </Link>

          <Link
            href="https://wa.me/923336630418"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <MessageCircle size={18} />
            Contact on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
