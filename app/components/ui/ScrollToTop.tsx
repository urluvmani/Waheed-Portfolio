"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        h-12 w-12
        rounded-full
        border border-gray-300
        bg-white
        text-gray-900
        shadow-lg
        hover:shadow-xl
        hover:scale-110
        active:scale-100
        transition-all duration-300
        flex items-center justify-center
      "
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
