"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          summary,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Journal saved successfully!");
        setTitle("");
        setSummary("");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Write New Journal Entry
        </h1>

        <p className="mt-3 text-gray-600">
          Save what you learned today and track your growth.
        </p>

        <form
          onSubmit={handleSubmit}
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
              placeholder="Example: Learned Next.js Routing"
              className="mt-2 w-full rounded-xl border p-4 outline-none"
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
              placeholder="Write what you learned today..."
              className="mt-2 w-full rounded-xl border p-4 outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-black px-8 py-3 text-white"
          >
            Save Entry
          </button>
        </form>
      </section>
    </main>
  );
}