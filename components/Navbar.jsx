import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold">DevJournal</h1>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>

        <Link href="/dashboard" className="text-sm font-medium">
          Dashboard
        </Link>

        <Link href="/create" className="text-sm font-medium">
          Write
        </Link>

        <button className="rounded-xl bg-black px-5 py-2 text-white">
          <Link href="/create" className="text-sm font-medium">
            Get Started
          </Link>
        </button>
      </div>
    </nav>
  );
}
