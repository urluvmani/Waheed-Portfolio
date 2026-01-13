"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroAdmin() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    headlineH1: "",
    subheadlineH2: "",
    bullets: "",
    ctaText: "",
    profileImageSrc: "",
  });

  const [status, setStatus] = useState("");

  // load existing data
  useEffect(() => {
    fetch("/api/hero")
      .then((r) => r.json())
      .then((d) =>
        d &&
        setForm({
          name: d.name || "",
          headlineH1: d.headlineH1 || "",
          subheadlineH2: d.subheadlineH2 || "",
          bullets: (d.bullets || []).join("\n"),
          ctaText: d.ctaText || "",
          profileImageSrc: d.profileImageSrc || "",
        })
      );
  }, []);

  const save = async () => {
    setStatus("Saving...");

    let imagePath = form.profileImageSrc;

    if (form.profileImageSrc.startsWith("data:image")) {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: form.profileImageSrc }),
      });

      const data = await res.json();
      imagePath = data.path;
    }

    await fetch("/api/hero", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        profileImageSrc: imagePath,
        bullets: form.bullets.split("\n").filter(Boolean),
      }),
    });

    setStatus("Saved");
  };

  return (
    <div className="space-y-4">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/admin")}
        className="text-sm font-medium text-gray-700 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl font-semibold">Hero Section</h2>

      {[
        ["Name", "name"],
        ["H1 Headline", "headlineH1"],
        ["H2 Subheadline", "subheadlineH2"],
        ["CTA Text", "ctaText"],
      ].map(([label, key]) => (
        <div key={key}>
          <label className="block text-sm font-medium">{label}</label>
          <input
            className="mt-1 w-full rounded border p-2"
            value={(form as any)[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium">
          Bullets (one per line)
        </label>
        <textarea
          className="mt-1 w-full rounded border p-2"
          rows={4}
          value={form.bullets}
          onChange={(e) =>
            setForm({ ...form, bullets: e.target.value })
          }
        />
      </div>

      <button
        onClick={save}
        className="rounded bg-gray-900 px-4 py-2 text-white"
      >
        Save
      </button>

      {status && (
        <p className="text-sm text-gray-600">{status}</p>
      )}
    </div>
  );
}
