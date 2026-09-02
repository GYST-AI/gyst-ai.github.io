import type { Metadata } from "next";
import { org } from "@/lib/org";
import { PAGE } from "@/lib/layout";
import { ConferenceCard } from "@/components/ConferenceCard";

export const metadata: Metadata = {
  title: `Conferences | ${org.acronym}`,
};

export default function ConferencesPage() {
  return (
    <div className={PAGE}>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        Conferences
      </h1>
      <p className="mb-10 max-w-2xl text-[var(--color-ink-muted)]">
        {org.name} ({org.acronym}) sponsors academic conferences run by pre-college students, for
        pre-college students. Each conference sets its own eligibility
        rules and has its own themes, programs, and organization committees. Here is what is
        currently available.
      </p>

      <div className="mb-8 space-y-6">
        {org.conferences.map((conference) => (
          <ConferenceCard
            key={`${conference.acronym}${conference.year}`}
            conference={conference}
          />
        ))}
      </div>

      <h2 className="mb-3 text-2xl font-extrabold tracking-tight">
        Future editions
      </h2>
      <p className="mb-6 max-w-3xl text-[var(--color-ink-muted)]">
        {org.acronym} intends to run {org.conferences[0].acronym} annually, and
        to add conferences in other areas of STEM as the foundation grows.
        Conferences are also not the whole remit: the foundation will also sponsor distinguished
         lectures, workshops, and compeitions, and provide research opportunities, mentorship, and more. Nothing beyond the {org.conferences[0].year} edition
        has been finalized yet. When it is, it will be announced here first.
      </p>

      <p className="text-sm">
        Questions about {org.acronym} itself?{" "}
        <a
          href={`mailto:${org.contact.email}`}
          className="font-medium text-[var(--color-brand)] underline underline-offset-2"
        >
          {org.contact.email}
        </a>
      </p>
    </div>
  );
}
