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
        Three separate groups run {org.acronym}, and it is worth knowing which
        does what. A Board of Directors governs the foundation. Officers run it
        day to day, and they are high school students. That is deliberate, since
        a forum built for young researchers should be run by them too. Neither
        group judges the papers. An independent Technical Program Committee
        does that.
      </p>

      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Board of Directors
      </h2>
      <div className="mb-8 space-y-4">
        {org.board.map((director) => (
          <OfficerCard key={director.name} officer={director} />
        ))}
      </div>

      <p className={`mb-12 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.boardNote}
      </p>

      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">Officers</h2>
      <div className="mb-8 space-y-4">
        {org.officers.map((officer) => (
          <OfficerCard key={officer.name} officer={officer} />
        ))}
      </div>

      <p className={`mb-12 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.officersNote}
      </p>

      <Callout variant="info" title="Technical Program Committee">
        <p>
          Papers submitted to {org.acronym} conferences are reviewed by a
          Technical Program Committee, separately from the foundation&apos;s
          board and officers. The committee for {org.conferences[0].acronym}{" "}
          {org.conferences[0].year} is still being formed, and is listed on{" "}
          <a href={org.conferences[0].url}>
            the {org.conferences[0].acronym} {org.conferences[0].year} site
          </a>{" "}
          rather than here.
        </p>
      </Callout>
    </div>
  );
}
