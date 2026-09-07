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
      </p>

      <p className={`mb-4 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.acronym} is currently incubated inside the {" "}
        <a href="https://caicc.utsa.edu/center-for-data-science/" className="text-sm font-medium text-[var(--color-brand)] underline underline-offset-2">
        Center for Data Science</a> at the {" "}
        <a href="https://caicc.utsa.edu/" className="text-sm font-medium text-[var(--color-brand)] underline underline-offset-2">
      College of AI, Cyber and Computing</a>, {" "}
        <a href="https://www.utsa.edu/" className="text-sm font-medium text-[var(--color-brand)] underline underline-offset-2">
        The University of Texas at San Antonio</a>. 
        It is governed by a board of directors, chaired by Dr. Anthony Rios, Director of the Center for Data Science.
      </p>

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
        Acknoweldgement
      </h2>
      <div className={`rounded-lg bg-[var(--color-paper-raised)] p-5 shadow-sm ${PROSE_WIDTH}`}>
        <p className="text-sm text-[var(--color-ink-muted)]">
          We would like to thank Mr. {org.acknowledgement} for helping with the design and development of this website.
        </p>
      </div>
    </div>
  );
}
