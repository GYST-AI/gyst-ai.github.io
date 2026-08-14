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
      <p className="mb-8 max-w-2xl text-[var(--color-ink-muted)]">
        {org.acronym} is led by high school students. That is deliberate — a
        forum built for young researchers is run by them too, with the
        conference program itself reviewed by an independent Technical Program
        Committee.
      </p>

      <div className="mb-8 space-y-4">
        {org.officers.map((officer) => (
          <OfficerCard key={officer.name} officer={officer} />
        ))}
      </div>

      <p className={`mb-8 ${PROSE_WIDTH} text-[var(--color-ink-muted)]`}>
        {org.officersNote}
      </p>

      <Callout variant="info" title="Technical Program Committee">
        <p>
          Papers submitted to {org.acronym} conferences are reviewed by a
          Technical Program Committee, separately from the foundation&apos;s
          officers. The committee for {org.conferences[0].acronym}{" "}
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
