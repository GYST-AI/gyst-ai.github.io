import Link from "next/link";
import Image from "next/image";
import { org, INCABS_URL } from "@/lib/org";
import { SHELL, PAGE } from "@/lib/layout";
import { PillarCard } from "@/components/PillarCard";
import { ConferenceCard } from "@/components/ConferenceCard";
import { GetInvolved } from "@/components/GetInvolved";
import { Callout } from "@/components/Callout";

const featured = org.conferences[0];

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
            High school researchers deserve a real academic forum.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-panel-muted)]">
            {org.mission}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INCABS_URL}
              className="rounded-md bg-[var(--color-gold)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] hover:bg-[#ff8a3d]"
            >
              {featured.acronym} {featured.year} — Call for Papers →
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
          <p className="mb-6 max-w-3xl text-[var(--color-ink-muted)]">
            {org.acronym} exists because plenty of high school students are
            doing genuine research and have nowhere to take it. Science fairs
            judge a poster in ten minutes. Journals aren&apos;t built for
            first-time authors. We run the missing middle: a conference with
            real peer review, where the work is read properly and the students
            present it themselves.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {org.pillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
            Currently running
          </h2>
          <ConferenceCard conference={featured} />
          <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
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
              record. You need a question you took seriously and an honest
              account of what you did. Negative and inconclusive results are
              still results, and first-time authors are the point of the whole
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
