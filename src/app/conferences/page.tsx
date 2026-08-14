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
        {org.name} ({org.acronym}) runs international research conferences for
        high school students: {org.tagline.toLowerCase()}. Each conference has
        its own site, program, and committee. Here is what is currently
        running.
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
      <p className="mb-6 text-[var(--color-ink-muted)]">
        {org.acronym} intends to run {org.conferences[0].acronym} annually, and
        to add conferences in other areas of science as the foundation grows.
        Nothing beyond the {org.conferences[0].year} edition has been scheduled
        yet — when it is, it will be announced here first.
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
