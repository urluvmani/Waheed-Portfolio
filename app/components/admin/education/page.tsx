"use client";

import { useState } from "react";

export default function EducationAdmin() {
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
      <h2 className="text-xl font-semibold">Education</h2>

      <input
        className="w-full rounded border p-2"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="w-full rounded border p-2"
        rows={3}
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button onClick={save} className="bg-gray-900 px-4 py-2 text-white rounded">
        Add
      </button>
    </div>
  );
}
