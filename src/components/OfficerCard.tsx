import Image from "next/image";
import type { Person } from "@/lib/org";
import { TBA } from "./TBA";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Renders anyone the foundation names: officers and board directors alike.
// They are the same shape, so one card keeps the two lists visually identical.
export function OfficerCard({ officer }: { officer: Person }) {
  return (
    <div className="flex h-full flex-col items-center rounded-lg border-t-4 border-t-[var(--color-brand)] bg-[var(--color-paper)] p-6 text-center shadow-sm">
      {/* Photos are pending. Until a real one exists, an initials avatar holds
          the space rather than a stock image standing in for a real person. */}
      {officer.photoUrl ? (
        <Image
          src={officer.photoUrl}
          alt={officer.name}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper-raised)] text-2xl font-bold text-[var(--color-ink-muted)]"
        >
          {initials(officer.name)}
        </span>
      )}
      <p className="mt-4 text-lg font-bold tracking-tight">{officer.name}</p>
      <p className="font-semibold text-[var(--color-brand)]">
        {officer.role}
      </p>
      {officer.conferenceRole && (
        <p className="text-sm text-[var(--color-ink-muted)]">
          {officer.conferenceRole}
        </p>
      )}
      <p className="mt-2 text-sm">
        <TBA value={officer.affiliation} label="Affiliation" />
      </p>
    </div>
  );
}
