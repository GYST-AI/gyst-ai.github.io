import type { Metadata } from "next";
import { org, INCABS_URL } from "@/lib/org";
import { Callout } from "@/components/Callout";

export const metadata: Metadata = {
  title: `Get Involved | ${org.acronym}`,
};

const featured = org.conferences[0];

// Every route here is a mailto. There is no form, no account, and no payment
// step anywhere on this site — nothing collects a student's details.
const audiences = [
  {
    title: "Students",
    description: `Submit your research to ${featured.acronym} ${featured.year}. Everything you need — tracks, deadlines, paper format, and the submission link — is on the conference site.`,
    action: {
      label: `Go to ${featured.acronym} ${featured.year} →`,
      href: INCABS_URL,
    },
  },
  {
    title: "Teachers and schools",
    description:
      "Encourage a student, or ask us anything you need in order to vouch for this to a parent or an administrator. We would rather answer a sceptical question than not get it.",
    action: {
      label: "Ask us a question →",
      href: `mailto:${org.contact.email}?subject=${encodeURIComponent("Question from a teacher or school")}`,
    },
  },
  {
    title: "Reviewers and mentors",
    description:
      "Researchers, graduate students, and professionals who can review a six-page student paper carefully and write useful feedback are what make the program work.",
    action: {
      label: "Volunteer to review →",
      href: `mailto:${org.contact.email}?subject=${encodeURIComponent("Reviewer / mentor volunteer")}`,
    },
  },
  {
    title: "Sponsors",
    description:
      "Support venue, review infrastructure, and keeping participation costs down for students who could not otherwise attend.",
    action: {
      label: "Become a sponsor →",
      href: `mailto:${org.contact.email}?subject=${encodeURIComponent("Sponsorship inquiry")}`,
    },
  },
  {
    title: "Foundation members",
    description: `Join ${org.acronym} and help build future programs for young researchers worldwide.`,
    action: {
      label: "Become a member →",
      href: `mailto:${org.contact.email}?subject=${encodeURIComponent("Foundation membership inquiry")}`,
    },
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 xl:px-16 3xl:max-w-4xl">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        Get involved
      </h1>
      <p className="mb-10 max-w-2xl text-[var(--color-ink-muted)]">
        {org.acronym} is a fully volunteer organization, so almost everything
        here runs on people offering time. Whichever of these you are, the way
        in is the same: send us an email.
      </p>

      <div className="mb-10 space-y-4">
        {audiences.map((audience) => (
          <section
            key={audience.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-paper-raised)] p-5 sm:p-6"
          >
            <h2 className="mb-2 text-lg font-bold tracking-tight">
              {audience.title}
            </h2>
            <p className="mb-3 text-[var(--color-ink-muted)]">
              {audience.description}
            </p>
            <a
              href={audience.action.href}
              className="inline-block font-semibold text-[var(--color-brand)] underline underline-offset-2"
            >
              {audience.action.label}
            </a>
          </section>
        ))}
      </div>

      <div className="mb-10">
        <Callout variant="info" title="Membership and sponsorship terms">
          <p>{org.membershipNote}</p>
        </Callout>
      </div>

      <h2 className="mb-3 text-2xl font-extrabold tracking-tight">Contact</h2>
      <p className="mb-2">
        For anything about the foundation itself:{" "}
        <a
          href={`mailto:${org.contact.email}`}
          className="font-semibold text-[var(--color-brand)] underline underline-offset-2"
        >
          {org.contact.email}
        </a>
      </p>
      <p className="mb-6 text-[var(--color-ink-muted)]">
        For anything about a specific conference — submissions, deadlines,
        registration, travel — please use the contact details on that
        conference&apos;s own site.
      </p>
      <p className="text-sm text-[var(--color-ink-muted)]">
        We are a fully volunteer team, so replies can take a few days. If you
        do not hear back within a week, send it again — it is far more likely
        we missed it than that we ignored it.
      </p>
    </div>
  );
}
