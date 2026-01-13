"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setMsg(data?.message || "Login failed");
        return;
      }

      router.push(next);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-10" style={{ maxWidth: 420, margin: "60px auto", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Admin Login</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        />

        <button
          disabled={loading}
          type="submit"
          style={{ padding: 10, borderRadius: 8, border: "1px solid #000" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {msg ? <p style={{ color: "crimson", margin: 0 }}>{msg}</p> : null}
      </form>
    </div>
  );
}
