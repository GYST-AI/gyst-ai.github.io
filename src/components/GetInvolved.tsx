import { org } from "@/lib/org";

// Expression of interest only. No tiers, no prices, no payment links —
// membership and sponsorship terms are undecided, and inventing them would
// be exactly the kind of unverifiable specific this site avoids.
const options = [
  {
    title: "Become a sponsor",
    description:
      "Help fund an international platform for first-time student researchers, covering venue, review infrastructure, and keeping participation costs down.",
    subject: "Sponsorship inquiry",
  },
  {
    title: "Become a foundation member",
    description: `Join ${org.acronym} and help build future programs for young researchers worldwide.`,
    subject: "Foundation membership inquiry",
  },
];

export function GetInvolved() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => (
        <div
          key={option.title}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-paper-raised)] p-5"
        >
          <p className="mb-1.5 text-base font-bold tracking-tight">
            {option.title}
          </p>
          <p className="mb-3 text-sm text-[var(--color-ink-muted)]">
            {option.description}
          </p>
          <a
            href={`mailto:${org.contact.email}?subject=${encodeURIComponent(option.subject)}`}
            className="inline-block text-sm font-semibold text-[var(--color-brand)] underline underline-offset-2"
          >
            {option.title} →
          </a>
        </div>
      ))}
    </div>
  );
}
