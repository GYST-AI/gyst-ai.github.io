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

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={conference.url}
            className="font-semibold text-[var(--color-brand)] underline underline-offset-2"
          >
            Visit the {conference.acronym} {conference.year} site →
          </a>
          {conference.cfpUrl && (
            <a
              href={conference.cfpUrl}
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-gold-ink)] underline underline-offset-2"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 1.5v8.5" />
                <path d="M4.5 7L8 10.5 11.5 7" />
                <path d="M2 12.5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" />
              </svg>
              Download the Call for Papers
              {conference.cfpSizeLabel && (
                <span className="font-medium opacity-70">
                  ({conference.cfpSizeLabel})
                </span>
              )}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
