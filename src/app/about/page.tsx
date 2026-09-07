import type { Metadata } from "next";
import Link from "next/link";
import { org } from "@/lib/org";
import { PAGE, PROSE_WIDTH } from "@/lib/layout";
import { Callout } from "@/components/Callout";
import AboutContent from "@/content/about.mdx";

export const metadata: Metadata = {
  title: `About | ${org.acronym}`,
};

export default function AboutPage() {
  return (
    <div className={PAGE}>
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
        About {org.acronym}
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-[var(--color-ink-muted)]">
        {org.name}. {org.tagline}.
      </p>

      <div
        className={`prose prose-neutral ${PROSE_WIDTH} prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-[var(--color-brand)]`}
      >
        <AboutContent />
      </div>
    </div>
  );
}
