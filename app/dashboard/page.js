import Navbar from "@/components/Navbar";
import connectDB from "@/lib/db";
import Journal from "@/models/Journal";

export default async function DashboardPage() {
  await connectDB();

  const journalEntries = await Journal.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Developer Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Track your learning journey and coding progress.
        </p>

        <div className="mt-10 space-y-6">
          {journalEntries.length > 0 ? (
            journalEntries.map((entry) => (
              <div
                key={entry._id.toString()}
                className="rounded-2xl border p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold">
                  {entry.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {new Date(entry.createdAt).toLocaleDateString()}
                </p>

                <p className="mt-4 text-gray-700">
                  {entry.summary}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No journal entries found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}