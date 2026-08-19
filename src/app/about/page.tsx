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

      <div className={`mt-10 ${PROSE_WIDTH}`}>
        <Callout variant="reassurance" title="For parents and teachers">
          <p>
            Wondering whether a brand-new conference is worth your student&apos;s
            time is a fair question, and we would ask it too. {org.acronym} was
            formed to run its first conference, and that conference has not
            happened yet.
          </p>
          <p>
            Here is what you can look at today. The{" "}
            <Link href="/leadership">people running it</Link> are named, along
            with their schools. Submissions go through Microsoft CMT, the same
            peer-review system professional conferences use. Anything still
            being decided is marked{" "}
            <span className="font-semibold">To be announced</span>, and our
            Board of Directors is coming together now, so you will see that
            section fill in as appointments are confirmed. If anything here is
            unclear, please{" "}
            <a href={`mailto:${org.contact.email}`}>email us and ask</a>.
          </p>
        </Callout>
      </div>
    </div>
  );
}
