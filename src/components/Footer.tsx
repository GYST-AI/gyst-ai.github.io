import Link from "next/link";
import Image from "next/image";
import { org, INCABS_URL } from "@/lib/org";
import { SHELL } from "@/lib/layout";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/conferences", label: "Conferences" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
];

const featured = org.conferences[0];

export function Footer() {
  return (
    <footer className="mt-16 bg-[var(--color-panel)]">
      <div className={`${SHELL} py-10`}>
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center rounded-lg bg-[var(--color-paper)] p-1.5">
            <Image
              src="/images/gystai-logo.png"
              alt={`${org.name} logo`}
              width={320}
              height={268}
              className="h-9 w-auto"
            />
          </span>
          <span className="text-base font-bold tracking-tight text-[var(--color-panel-ink)] underline decoration-[var(--color-gold)] underline-offset-4">
            {org.name} ({org.acronym})
          </span>
        </Link>
        <p className="mt-2 text-sm text-[var(--color-panel-muted)]">
          {org.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-panel-ink)] hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INCABS_URL}
            className="text-[var(--color-panel-ink)] hover:text-[var(--color-accent)]"
          >
            {featured.acronym} {featured.year} ↗
          </a>
        </div>

        <div className="mt-4 text-sm font-medium text-[var(--color-panel-muted)]">
          <a
            href={`mailto:${org.contact.email}`}
            className="hover:text-[var(--color-accent)]"
          >
            {org.contact.email}
          </a>
        </div>

        {/* Social links go here once accounts actually exist and are public.
            org.contact.socials is deliberately empty until then. */}
        {org.contact.socials.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-[var(--color-panel-muted)]">
            {org.contact.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                className="hover:text-[var(--color-accent)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}

        <p className="mt-8 border-t border-white/10 pt-4 text-xs text-[var(--color-panel-muted)]">
          &copy; {org.name}. Run entirely by volunteers.
        </p>
      </div>
    </footer>
  );
}
