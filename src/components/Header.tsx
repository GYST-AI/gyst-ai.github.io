import Link from "next/link";
import Image from "next/image";
import { org } from "@/lib/org";
import { SHELL } from "@/lib/layout";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-[var(--color-gold)] bg-[var(--color-panel)]">
      <div className={`${SHELL} flex items-center justify-between gap-6 py-3`}>
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center rounded-lg bg-[var(--color-paper)] p-1.5 shadow-sm">
            <Image
              src="/images/gystai-logo.png"
              alt={`${org.name} logo`}
              width={320}
              height={268}
              priority
              className="h-10 w-auto"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-extrabold tracking-tight text-[var(--color-panel-ink)]">
              {org.acronym}
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">
              {org.name}
            </span>
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
