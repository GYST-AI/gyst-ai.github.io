import type { Metadata } from "next";
import { org } from "@/lib/org";
import { PAGE, PROSE_WIDTH } from "@/lib/layout";
import { OfficerCard } from "@/components/OfficerCard";
import { Callout } from "@/components/Callout";

export const metadata: Metadata = {
  title: `Leadership | ${org.acronym}`,
};

export default function LeadershipPage() {
  return (
    <div className={PAGE}>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        Leadership
      </h1>
      <p className={`mb-10 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.name} ({org.acronym}) is a non-profit organization dedicated to advancing learning and research 
        among pre-college students by supporting academic conferences organized by students, for students.
        {org.acronym} is currently incubated inside the Center for Data Science at the College of AI, Cyber and Computing, 
        University of Texas at San Antonio.
      </p>

      <p className={`mb-4 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.acronym} is governed by a board of directors as chaired by Dr. Anthony Rios, Director of the Center for Data Science.
      </p>

      <ul className="mb-10 flex flex-wrap gap-x-6 gap-y-1">
        {org.incubation.links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="text-sm font-medium text-[var(--color-brand)] underline underline-offset-2"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Board of Directors
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {org.board.map((director) => (
          <OfficerCard key={director.name} officer={director} />
        ))}
      </div>

      <p className={`mb-12 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.boardNote}
      </p>

      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Acknowledgement
      </h2>
      <p className={`mb-4 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.acknowledgement}
      </p>
    </div>
  );
}
