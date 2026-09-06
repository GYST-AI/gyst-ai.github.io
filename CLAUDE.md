# CLAUDE.md — gyst-ai.github.io

The website for the **Global Youth AI & STEM Foundation (GYST-AI)**, the
foundation that hosts **inCABS 2027**. This file is the short version of the
rules that apply to every task.

Sibling repo: `incabs-2027/incabs-2027.github.io` (the conference site). The two
sites share a design system and a rulebook; this one is the parent org.

## Stack

- **Next.js 16.3** App Router, TypeScript, React 19.2
- **Tailwind CSS v4**, CSS-first config — all tokens live in `src/app/globals.css`,
  there is no `tailwind.config.js`
- **Static export** (`output: 'export'`) — no backend
- **MDX** for prose content under `src/content/`
- Deployed via **GitHub Actions** to GitHub Pages

The repo is named `gyst-ai.github.io`, so it publishes at the **org root**. That
means **no `basePath` and no `assetPrefix`.** Do not add them — that is the
single most common way this setup breaks.

## Static-export constraints — build will fail or silently break otherwise

1. **No API routes, no Route Handlers, no Server Actions, no middleware.**
   There is no server. If a task seems to need one, stop and flag it.
2. **`images: { unoptimized: true }`** is mandatory.
3. **No `dynamic = 'force-dynamic'`, no ISR, no `revalidate`.**
4. Any dynamic route segment needs **`generateStaticParams`**.
5. Prefer **Server Components**. Add `'use client'` only where genuinely needed
   (currently: `Nav.tsx`, the mobile menu toggle, and nothing else).
6. Run `npm run build` locally before every push.

## Integrity rules — these override helpfulness

1. **Never invent a date, deadline, venue, price, or person.** Unknown values
   are `null` in `src/lib/org.ts` and render as "To be announced" through
   `<TBA />`. Do not generate example values intended to be replaced later —
   they get shipped by accident.
2. **Never imply affiliation with ACM, IEEE, or any other body.** The ACM
   formatting template may be referenced, but every mention carries an explicit
   non-affiliation disclaimer. No third-party logos.

   One institutional relationship is on the record, confirmed by the founder
   on 2026-08-31 and stated on the About page: GYST-AI is currently incubated
   inside the Center for Data Science at the College of AI, Cyber and Computing,
   University of Texas at San Antonio, and the Center Director, Dr. Anthony
   Rios, provides the programmatic mentoring and support. Say that and stop.
   It is not sponsorship, endorsement, accreditation, or a joint venture, no
   UTSA logo goes on the site, and no other institution gets the same
   treatment without the same explicit confirmation.
3. **Never promise publication, indexing, or DOIs.**
4. **Never list a named person without confirmed consent.** Confirmed by the
   founder so far: officers Chenlyvia Xiong and Zimo Wen, and the five
   directors now in `org.board` (Anthony Rios, H Chad Lane, Chenlyvia Xiong,
   Dana L. Suskind, Jinjun Xiong), confirmed by name on 2026-08-31. Nobody
   else ships. A board seat is not a reason to relax the rule; it is a reason
   to apply it, and the same goes for a Technical Program Committee seat.
5. **No payment links, fee tables, or bank details.** Membership and sponsorship
   are expression-of-interest `mailto:` links only.
6. **State the purpose; nonprofit status is confirmed, nothing more specific
   is.** GYST-AI is dedicated to *charitable and educational purposes*, in the
   founder's own wording, and the site says it plainly (`org.purpose`).
   Separately, GYST-AI is a confirmed non-profit organization, confirmed by
   the founder on 2026-09-06, and the site may say so (`org.legalStatus`).
   Still prohibited without a separate explicit founder confirmation: any
   assertion of formal incorporation, 501(c)(3) recognition, an EIN,
   tax-deductibility, or any solicitation of donations. `org.foundedYear` and
   `org.mailingAddress` stay `null`. The About page's "What we don't do" list
   carries the explicit disclaimer that keeps the purpose language honest, so
   do not remove that bullet.
7. **Every claim must trace** to `references/`, or to a decision recorded here.
   If it doesn't, leave it out and flag it.

### Why these exist

This is a brand-new organization with no track record, running a conference that
hasn't happened yet. Every unverifiable claim makes it resemble a predatory
conference — the fake-venue scam academics are trained to filter out. Honest
"TBA" reads as credible; invented specifics that later change do not.

## Scope — the foundation is wider than the conference

Two layers, and conflating them is the most common copy error here:

- **The foundation** serves secondary-school students and other learners who
  have not yet begun postsecondary education, anywhere (`org.learnerScope`),
  across biomedical sciences, AI, medicine, technology, and related STEM
  (`org.disciplines`). It is organized to run conferences, lectures, workshops,
  research opportunities, mentorship, and competitions (`org.activities`).
- **A conference** sets its own eligibility. inCABS 2027 requires a recognized
  high school. **Never restate a conference's eligibility rule as a
  foundation-level fact** — that is what pillar 3 used to do.

`org.activities` is scope, not a schedule. Only inCABS 2027 exists. Anything
else must read as what the foundation is organized to do, and must sit visibly
apart from what is running. No dates, no "coming soon", no `<TBA />` badge that
implies a program is already planned.

## Audience rules

A 16-year-old who has never written or submitted a research paper, often on a
mid-range Android phone, on metered mobile data, in a country where bandwidth is
expensive. Younger and older pre-university learners too — the foundation's
remit is everyone before postsecondary, not high school alone. Also their
teachers and parents, who are checking whether this is legitimate.

**Performance is an equity issue, not an optimization exercise.**

- Zero client JS on content pages. Server Components by default.
- No analytics scripts, no third-party embeds, no web fonts.
- Target: Lighthouse performance 95+ on mobile throttling.

### Tone: show integrity, don't narrate it

The integrity rules above govern **what the site says**. They are not a licence
to make the site *talk about* how honest it is. Copy that congratulates itself
on its own standards reads as defensive, and it puts a first-time visitor on
the back foot when the whole point is to make them feel welcome.

Mark an unknown `<TBA />` and move on. Do not append a clause explaining that
we marked it TBA instead of guessing. The empty board section already makes the
point; saying "rather than padded out with names we hope to have" makes it
twice, and the second time sounds like an accusation aimed at someone else.

Patterns to avoid, all of which have been removed at least once:

- Trailing insistence: "once appointments are confirmed, **and not before**"
- Virtue commentary: "**rather than** filled in with a plausible guess",
  "**rather than** padded out with names we hope to have"
- Us-versus-them: "plenty of things that look like this are not what they
  claim to be", "**we would rather** say so than list plans as if they were
  events"
- Talking down about what students already do. Science fairs are where most of
  this audience is coming from. Position inCABS as the next step up, never as
  the serious alternative to something beneath it.

Write it the way a friendly person would say it out loud: "Our founding Board
of Directors is coming together now. We will introduce each director here, with
their role, as their appointment is confirmed." Same facts, no lecture.

### Punctuation: no em dashes, ever

**Never use an em dash (—) in anything a visitor can read.** Not in
`src/lib/org.ts` strings, not in MDX, not in UI copy inside a component. The
founder's call: it makes the site read as machine-written.

Do not swap in another symbol to do the same job. An en dash (–), a slash, a
semicolon used as a dramatic pause, or a bullet character standing in for a
conjunction are all the same problem wearing a different hat. **Rewrite the
sentence instead**: split it in two, use a comma, or use a word like "and",
"which", "including", "because", or "so".

Plain hyphens (-) are fine: `GYST-AI`, `peer-reviewed`, `July 8-10, 2027`.

Check before pushing, against the built output rather than the source, so
nothing slips through MDX:

```bash
grep -rn '—' src/app src/components src/content src/lib
```

Existing em dashes in code comments are not visible to users and are not the
target of this rule, but do not add new ones.

**Write for someone who doesn't know the vocabulary.** Define terms inline on
first use. Answer the fears directly: Do I need a lab? A professor? What if my
results are negative? Tone: warm but never condescending. "This is real research
and you're capable of it," not "science is fun!"

**Accessibility is part of the mission,** not a checkbox. 4.5:1 contrast
minimum, 16px base text, visible focus states, alt text on every image, semantic
HTML, full keyboard navigation.

## Working style

- Ask before assuming. If a fact is missing, stop and ask rather than filling it.
- Facts live in `src/lib/org.ts`. Prose lives in MDX under `src/content/`.
  **Do not hardcode org copy inside components.** UI copy (nav labels, section
  headings) is the exception and lives with its component.
- Cross-site links use the `INCABS_URL` export, never a hardcoded string.

## Design system

Shared with the inCABS site. Same two surfaces — warm bone `paper` and deep blue
`panel` — because that family resemblance is what signals "same organization."

**The one deliberate difference: inCABS owns teal, GYST-AI owns blue.**
`--color-brand` here is `#004faa` (~7.5:1 on paper). Purple `#5e1ba0` and pink
`#d90670`, which inCABS reserves for per-track badges, are free here and carry
the "what we do" pillars. Blue / teal / orange are primary; purple / pink are
secondary. All five come from the GYST-AI logo.

No web fonts (system sans only). No dark mode. No custom animations.

## Pre-push checklist

1. `npm run build` passes locally
2. Scan the built output for risky claims:
   ```bash
   grep -rniE 'deadline|DOI|indexed|proceedings|ACM|IEEE|\$|fee|register|charitable|nonprofit|501|donat|tax' out/
   ```
   Most hits are legitimate. Read each one and confirm it complies with the
   rules above. Specifically: every `charitable` hit must be purpose language,
   and a `nonprofit` hit must match the confirmed wording in `org.legalStatus`
   (rule 6). Any hit asserting 501(c)(3) recognition, an EIN, tax-deductibility,
   or asking for a donation is a bug, there should be zero of those.
3. No `basePath` or `assetPrefix` in `next.config.ts`
4. No `'use client'` added without a stated reason

## Open items — blocked on the foundation, do not invent

- Photos for every named officer and director (`photoUrl` is `null` throughout;
  an initials avatar holds the space)
- Board officer roles, if the board elects a chair, vice chair, or treasurer.
  Every director currently carries the neutral role `"Director"`, because no
  officer role has been stated. Do not promote anyone to chair on inference.
- Additional officers, directors, or advisors, with confirmed consent
- Legal/incorporation status, if and when it exists
- Social media handles (`org.contact.socials` is `[]`; the footer renders
  nothing until it isn't)
- Membership and sponsorship terms
