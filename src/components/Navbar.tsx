"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Marc
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-6 sm:flex">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/about/" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact/" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/about/" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact/" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
