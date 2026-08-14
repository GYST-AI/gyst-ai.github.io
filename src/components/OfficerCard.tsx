import Image from "next/image";
import type { Officer } from "@/lib/org";
import { TBA } from "./TBA";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border-l-4 border-l-[var(--color-brand)] bg-[var(--color-paper)] p-5 shadow-sm">
      {/* Photos are pending. Until a real one exists, an initials avatar holds
          the space rather than a stock image standing in for a real person. */}
      {officer.photoUrl ? (
        <Image
          src={officer.photoUrl}
          alt={officer.name}
          width={72}
          height={72}
          className="h-18 w-18 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper-raised)] text-lg font-bold text-[var(--color-ink-muted)]"
        >
          {initials(officer.name)}
        </span>
      )}
      <div>
        <p className="text-lg font-bold tracking-tight">{officer.name}</p>
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
    </div>
  );
}
