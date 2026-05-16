import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 text-sm font-medium text-gray-500">
          Build • Track • Grow
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Your Personal Developer Journal
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Track your coding journey, save learning notes, manage project
          progress, and become a better developer every single day.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-black px-6 py-3 text-white">
            <Link href="/create" className="text-sm font-medium">
              Start Writing
            </Link>
          </button>

          <button className="rounded-xl border border-black px-6 py-3">
             <Link href="/dashboard" className="text-sm font-medium">
              View Dashboard
            </Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Why DevJournal?</h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Daily Learning Notes</h3>
            <p className="mt-3 text-gray-600">
              Save everything you learn daily so your knowledge compounds over
              time.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Project Progress Tracking</h3>
            <p className="mt-3 text-gray-600">
              Track what you build, what breaks, and how you improve.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Growth Dashboard</h3>
            <p className="mt-3 text-gray-600">
              Visualize your consistency and become a stronger developer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Start Building Your Developer Legacy
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Small daily progress becomes massive long-term growth.
        </p>

        <button className="mt-8 rounded-xl bg-black px-8 py-4 text-white">
          Get Started Free
        </button>
      </section>
    </main>
  );
}
