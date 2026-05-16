"use client";

import Link from "next/link";
import {
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        DevJournal
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/create">Write</Link>

        <SignInButton mode="modal">
          <button className="rounded-xl bg-black px-5 py-2 text-white">
            Sign In
          </button>
        </SignInButton>

        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}