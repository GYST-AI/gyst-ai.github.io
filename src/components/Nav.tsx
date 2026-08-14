"use client";

// The only structurally-required client component on the site: the mobile
// menu needs a toggle. Everything else is a server component.

import { useState } from "react";
import Link from "next/link";
import { org, INCABS_URL } from "@/lib/org";

// Navigation labels are UI copy, not foundation facts, so they live here
// rather than in lib/org.ts.
const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/conferences", label: "Conferences" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
];

const featured = org.conferences[0];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Primary" className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-2 text-sm font-semibold text-[var(--color-panel-ink)] sm:hidden"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        Menu
      </button>

      <ul
        id="primary-nav-menu"
        className={`${
          open ? "flex" : "hidden"
        } absolute right-0 z-40 mt-2 w-72 flex-col gap-1 rounded-lg border border-white/10 bg-[var(--color-panel-raised)] p-3 shadow-lg sm:static sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
      >
        {primaryLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded px-2 py-1.5 text-sm font-semibold text-[var(--color-panel-ink)] hover:text-[var(--color-accent)] sm:px-0 sm:py-0"
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li className="mt-2 sm:mt-0 sm:ml-2">
          <a
            href={INCABS_URL}
            onClick={() => setOpen(false)}
            className="block rounded-md bg-[var(--color-gold)] px-4 py-2 text-center text-sm font-bold text-[var(--color-ink)] hover:bg-[#ff8a3d]"
          >
            {featured.acronym} {featured.year} →
          </a>
        </li>
      </ul>
    </nav>
  );
}
