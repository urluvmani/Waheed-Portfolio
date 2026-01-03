"use client";

import { useEffect, useState } from "react";

export default function ExperienceAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    problem: "",
    solution: "",
    result: "",
  });

  useEffect(() => {
    fetch("/api/experience")
      .then(r => r.json())
      .then(setItems);
  }, []);

  const add = async () => {
    await fetch("/api/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    location.reload();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Experience</h2>

      {["title", "problem", "solution", "result"].map(f => (
        <input
          key={f}
          className="w-full rounded border p-2"
          placeholder={f}
          value={(form as any)[f]}
          onChange={e => setForm({ ...form, [f]: e.target.value })}
        />
      ))}

      <button onClick={add} className="bg-gray-900 px-4 py-2 text-white rounded">
        Add Experience
      </button>

      <hr />

      {items.map(i => (
        <div key={i._id} className="border p-3 rounded">
          <strong>{i.title}</strong>
          <p className="text-sm text-gray-600">{i.problem}</p>
        </div>
      ))}
    </div>
  );
}
