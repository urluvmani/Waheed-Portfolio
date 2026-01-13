"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExperienceAdmin() {
  const router = useRouter();

  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    problem: "",
    solution: "",
    result: "",
  });

  useEffect(() => {
    fetch("/api/experience")
      .then((r) => r.json())
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
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/admin")}
        className="text-sm font-medium text-gray-700 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl font-semibold">Experience</h2>

      {["title", "problem", "solution", "result"].map((f) => (
        <input
          key={f}
          className="w-full rounded border p-2"
          placeholder={f}
          value={(form as any)[f]}
          onChange={(e) =>
            setForm({ ...form, [f]: e.target.value })
          }
        />
      ))}

      <button
        onClick={add}
        className="rounded bg-gray-900 px-4 py-2 text-white"
      >
        Add Experience
      </button>

      <hr />

      {items.map((i) => (
        <div key={i._id} className="rounded border p-3">
          <strong>{i.title}</strong>
          <p className="text-sm text-gray-600">{i.problem}</p>
        </div>
      ))}
    </div>
  );
}
