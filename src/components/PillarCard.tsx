import type { Pillar } from "@/lib/org";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article
      className="rounded-lg border border-[var(--color-border)] border-t-4 bg-[var(--color-paper-raised)] p-5 sm:p-6"
      style={{ borderTopColor: pillar.accent }}
    >
      <h3 className="mb-2 text-lg font-bold tracking-tight text-balance">
        {pillar.title}
      </h3>
      <p className="text-sm text-[var(--color-ink-muted)]">
        {pillar.description}
      </p>
    </article>
  );
}
