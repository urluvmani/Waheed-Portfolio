"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutAdmin() {
  const router = useRouter();

  const [paragraphs, setParagraphs] = useState("");
  const [tools, setTools] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/about")
      .then((r) => r.json())
      .then((d) => {
        if (!d) return;
        setParagraphs((d.paragraphs || []).join("\n\n"));
        setTools((d.tools || []).join("\n"));
      });
  }, []);

  const save = async () => {
    setStatus("Saving...");
    await fetch("/api/about", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paragraphs: paragraphs.split("\n\n").filter(Boolean),
        tools: tools.split("\n").filter(Boolean),
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

      <h2 className="text-xl font-semibold">About Section</h2>

      <textarea
        className="w-full rounded border p-2"
        rows={6}
        placeholder="Paragraphs (separate with empty line)"
        value={paragraphs}
        onChange={(e) => setParagraphs(e.target.value)}
      />

      <textarea
        className="w-full rounded border p-2"
        rows={4}
        placeholder="Tools (one per line)"
        value={tools}
        onChange={(e) => setTools(e.target.value)}
      />

      <button
        onClick={save}
        className="rounded bg-gray-900 px-4 py-2 text-white"
      >
        Save
      </button>

      {status && <p className="text-sm text-gray-600">{status}</p>}
    </div>
  );
}
