"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EducationAdmin() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const save = async () => {
    await fetch("/api/education", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    alert("Saved");
  };

  return (
    <div className="space-y-3">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/admin")}
        className="text-sm font-medium text-gray-700 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl font-semibold">Education</h2>

      <input
        className="w-full rounded border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full rounded border p-2"
        rows={3}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={save}
        className="rounded bg-gray-900 px-4 py-2 text-white"
      >
        Add
      </button>
    </div>
  );
}
