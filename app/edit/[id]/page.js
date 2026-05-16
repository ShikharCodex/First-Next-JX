"use client";

import { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function EditPage({ params }) {
  const router = useRouter();

  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const fetchJournal = async () => {
      const response = await fetch(`/api/journal/${id}`);
      const data = await response.json();

      setTitle(data.title || "");
      setSummary(data.summary || "");
    };

    if (id) {
      fetchJournal();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/journal", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        summary,
      }),
    });

    if (response.ok) {
      alert("Journal updated successfully!");
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Edit Journal Entry
        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Summary
            </label>

            <textarea
              rows="6"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="mt-2 w-full rounded-xl border p-4"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-black px-8 py-3 text-white"
          >
            Update Entry
          </button>
        </form>
      </section>
    </main>
  );
}