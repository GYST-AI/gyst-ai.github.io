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
//
// Full-bleed: the photo (or, until one exists, an initials plate) fills the
// entire 4:5 card, with name/role/affiliation overlaid on a gradient scrim.
export function OfficerCard({ officer }: { officer: Person }) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {officer.photoUrl ? (
        <Image
          src={officer.photoUrl}
          alt={officer.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        // Photos are pending. Until a real one exists, an initials plate holds
        // the space rather than a stock image standing in for a real person.
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-[var(--color-panel-raised)] text-5xl font-bold text-[var(--color-panel-muted)]"
        >
          {initials(officer.name)}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,28,0.92)] from-10% via-[rgba(8,16,28,0.55)] via-40% to-transparent to-70%" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-lg font-extrabold text-white">{officer.name}</p>
        <p className="text-xs font-bold uppercase tracking-wide text-[#a9cdf5]">
          {officer.role}
        </p>
        {officer.conferenceRole && (
          <p className="text-xs text-white/70">{officer.conferenceRole}</p>
        )}
        <p className="mt-1.5 text-sm text-white/80">
          <TBA value={officer.affiliation} label="Affiliation" />
        </p>
      </div>
    </article>
  );
}
