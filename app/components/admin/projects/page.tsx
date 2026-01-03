"use client";

import { useState } from "react";

export default function ProjectsAdmin() {
  const [form, setForm] = useState({
    slug: "",
    title: "",
    overview: "",
    problem: "",
    approach: "",
    tools: "",
    result: "",
  });

  const save = async () => {
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tools: form.tools.split("\n").filter(Boolean),
      }),
    });
    alert("Saved");
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Projects</h2>

      {Object.keys(form).map(k => (
        <textarea
          key={k}
          className="w-full rounded border p-2"
          rows={k === "overview" ? 3 : 2}
          placeholder={k}
          value={(form as any)[k]}
          onChange={e => setForm({ ...form, [k]: e.target.value })}
        />
      ))}

      <button onClick={save} className="bg-gray-900 px-4 py-2 text-white rounded">
        Save Project
      </button>
    </div>
  );
}
