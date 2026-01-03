"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  FileSpreadsheet,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-emerald-900"
        >
          <FileSpreadsheet className="h-6 w-6 text-emerald-700" />
          Waheed<span className="text-emerald-600">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-700 transition hover:text-emerald-700"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* DESKTOP CTA */}
          <Link
            href="https://wa.me/923336630418"
            target="_blank"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            <MessageCircle size={16} />
            Contact
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-emerald-800 transition hover:bg-emerald-50 md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 bg-white px-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-800 transition hover:text-emerald-700"
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE CTA */}
          <Link
            href="https://wa.me/923336630418"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
          >
            <MessageCircle size={18} />
            Contact on WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}
