import Link from "next/link";
import Image from "next/image";
import { org, INCABS_URL } from "@/lib/org";
import { SHELL, PAGE } from "@/lib/layout";
import { PillarCard } from "@/components/PillarCard";
import { ConferenceCard } from "@/components/ConferenceCard";
import { GetInvolved } from "@/components/GetInvolved";
import { Callout } from "@/components/Callout";

const featured = org.conferences[0];

// org.disciplines and org.activities are stored capitalized so they can be
// listed on their own. Dropping only the first letter's case lets them sit
// inside a sentence without flattening an acronym — "Related STEM disciplines"
// must not become "related stem disciplines".
function inSentence(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

/** "a, b, and c" — the last item joined with "and", not a bare comma. */
function sentenceList(values: string[]): string {
  const items = values.map(inSentence);
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

export default function HomePage() {
  return (
    <>
      {/* Hero sits on the panel surface — the second deliberate surface of the
          design system, shared with the inCABS site. */}
      <section className="bg-[var(--color-panel)] py-12 sm:py-16">
        <div className={SHELL}>
          <span className="flex w-fit items-center justify-center rounded-xl bg-[var(--color-paper)] p-3 shadow-sm">
            <Image
              src="/images/gystai-logo.png"
              alt={`${org.name} logo`}
              width={320}
              height={268}
              priority
              className="h-20 w-auto sm:h-24"
            />
          </span>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">
            {org.name}
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-balance text-[var(--color-panel-ink)] sm:text-5xl">
            {org.tagline}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-panel-muted)]">
            {org.mission}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INCABS_URL}
              className="rounded-md bg-[var(--color-gold)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] hover:bg-[#ff8a3d]"
            >
              {featured.acronym} {featured.year} Call for Papers →
            </a>
            <Link
              href="/about"
              className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-[var(--color-panel-ink)] hover:border-[var(--color-accent)]"
            >
              What we do
            </Link>
          </div>
        </div>
      </section>

      <div className={PAGE}>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
            What the foundation does
          </h2>
          <p className="mb-4 max-w-3xl text-[var(--color-ink-muted)]">
            {org.purpose} We cover a wide varity of science fields, such as{" "}
            {sentenceList(org.disciplines)}.
          </p>
          <p className="mb-6 max-w-3xl text-[var(--color-ink-muted)]">
            {org.acronym} was formed by our founding director, Chenlyvia Xiong (who herself is a high-school student), to address a critical gap 
            in pre-college STEM education. Many high school students are already conducting serious and creative research well before entering college, 
            yet they have few opportunities to experience the full academic process through which research is shared, evaluated, discussed, and disseminated. 
            Traditional science fairs provide valuable opportunities for students to showcase their work, but they are fundamentally different 
            from academic conferences organized by professional researchers, where participants submit papers, undergo rigorous peer review, present and 
            discuss their findings, learn from one another, and publish their work in conference proceedings.
          </p>
          <p className="mb-6 max-w-3xl text-[var(--color-ink-muted)]">
            {org.acronym} seeks to bridge this gap by creating authentic, student-centered academic conference experiences for pre-college students. 
            More importantly, we aim not only to help students participate in conferences, but also to mentor and empower them to 
            organize and lead them. Students can gain firsthand experience across the entire scholarly conference lifecycle, from developing 
            a call for papers and coordinating a peer-review process to organizing conference programs, presenting and discussing 
            research, learning from their peers, and publishing accepted work in conference proceedings. Through these experiences, we seek
            to cultivate a vibrant pre-college scholarly community in which young researchers learn with, from, and alongside one another.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {org.pillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
            What we are sponsoring so far:
          </h2>
          <ConferenceCard conference={featured} />
          <p className="mt-4 max-w-3xl text-sm text-[var(--color-ink-muted)]">
            {featured.acronym} {featured.year} is the only conference running right
            now. The foundation will sponsoring other activities beyond conferences in the future,
            including {sentenceList(org.activities.slice(1))}. Please stay tuned or get in contact if you are interested in contributing to this effort.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--color-ink-muted)]">
            Future editions of {featured.acronym}, and future {org.acronym}{" "}
            programs, will be listed on the{" "}
            <Link
              href="/conferences"
              className="font-semibold text-[var(--color-brand)] underline underline-offset-2"
            >
              conferences page
            </Link>{" "}
            as they are announced.
          </p>
        </section>

        <section className="mb-12 max-w-3xl">
          <Callout
            variant="reassurance"
            title="If you're a student wondering whether this is for you"
          >
            <p>
              You do not need a laboratory, a professor, or a published track
              record. You need a research question that you aim to solve and share with your peer students about what you did. Negative and inconclusive results are
              still results, and first-time academic research experience is the point of the whole
              exercise.
            </p>
            <p>
              Parents and teachers checking us out:{" "}
              <Link href="/about">how we&apos;re organized</Link> is written
              for you.
            </p>
          </Callout>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
            Get involved
          </h2>
          <GetInvolved />
        </section>
      </div>
    </>
  );
}
