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
        {org.name} — {org.tagline.toLowerCase()}.
      </p>

      <div
        className={`prose prose-neutral ${PROSE_WIDTH} prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-[var(--color-brand)]`}
      >
        <AboutContent />
      </div>

      <div className={`mt-10 ${PROSE_WIDTH}`}>
        <Callout variant="reassurance" title="For parents and teachers">
          <p>
            A reasonable question to ask about any new conference is whether it
            is real. Ours is new and says so: {org.acronym} was formed to run
            its first conference, and that conference has not happened yet.
          </p>
          <p>
            What you can check today: the{" "}
            <Link href="/leadership">people running it</Link> are named with
            their schools, submissions are handled through Microsoft CMT (the
            same peer-review system used by professional conferences), and
            every detail that has not been decided is marked{" "}
            <span className="font-semibold">To be announced</span> rather than
            filled in with a plausible guess. Our Board of Directors is still
            being formed, so that section sits empty rather than padded out with
            names we hope to have. If something here is unclear,{" "}
            <a href={`mailto:${org.contact.email}`}>email us and ask</a>.
          </p>
        </Callout>
      </div>
    </div>
  );
}
