import Image from "next/image";
import type { ConferenceEntry } from "@/lib/org";
import { TBA } from "./TBA";

export function ConferenceCard({
  conference,
}: {
  conference: ConferenceEntry;
}) {
  return (
    <article className="flex flex-col gap-5 rounded-lg border-l-4 border-l-[var(--color-brand)] bg-[var(--color-paper)] p-6 shadow-sm sm:flex-row sm:items-start">
      <Image
        src={conference.logoUrl}
        alt={`${conference.acronym} ${conference.year} logo`}
        width={299}
        height={320}
        className="h-24 w-auto shrink-0"
      />
      <div>
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-brand)]">
          {conference.status}
        </p>
        <h3 className="mb-2 text-2xl font-extrabold tracking-tight">
          {conference.acronym} {conference.year}
        </h3>
        <p className="mb-3 font-medium text-[var(--color-ink-muted)]">
          {conference.name}
        </p>

        <dl className="mb-4 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
          <div>
            <dt className="inline font-semibold">Dates: </dt>
            <dd className="inline">
              <TBA value={conference.dates} label="Dates" />
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">Location: </dt>
            <dd className="inline">
              <TBA value={conference.location} label="Location" />
            </dd>
          </div>
        </dl>

        <p className="mb-4">{conference.description}</p>

        <a
          href={conference.url}
          className="inline-block font-semibold text-[var(--color-brand)] underline underline-offset-2"
        >
          Visit the {conference.acronym} {conference.year} site →
        </a>
      </div>
    </article>
  );
}
