// Single source of truth for everything this site asserts about GYST-AI.
//
// Every value here traces to references/inCABS call for paper draft.docx, to
// "cfp inCABS 27 new.pdf" (the finalized Call for Papers), or to a decision
// recorded in CLAUDE.md. Unknown values are `null`, never an empty string, and
// never a placeholder value intended to be replaced later — placeholders get
// shipped by accident. `null` is what makes <TBA /> fire.

/** The inCABS 2027 conference site. Every cross-site link uses this, so the
 *  URL exists in exactly one place if it ever changes (e.g. to incabs.org). */
export const INCABS_URL = "https://incabs-2027.github.io";

export type Officer = {
  name: string;
  /** Role within the foundation itself. */
  role: string;
  /** Role on a GYST-AI conference, if any. */
  conferenceRole: string | null;
  affiliation: string | null;
  photoUrl: string | null;
};

export type ConferenceEntry = {
  acronym: string;
  year: number;
  name: string;
  theme: string;
  description: string;
  /** Where this edition stands right now, e.g. "Call for Papers open". */
  status: string;
  dates: string | null;
  location: string | null;
  url: string;
  /** The conference's Call for Papers PDF. Hosted on the conference's own
   *  site, never copied here — one file, one URL, so the two sites cannot
   *  drift apart. */
  cfpUrl: string | null;
  cfpSizeLabel: string | null;
  logoUrl: string;
};

export type Pillar = {
  title: string;
  description: string;
  /** CSS custom property driving the card's accent rule. */
  accent: string;
};

export type OrgData = {
  name: string;
  acronym: string;
  tagline: string;
  /** One sentence. Used in metadata, the hero, and the About page opener. */
  mission: string;
  contact: {
    email: string;
    /** No accounts exist yet. Populate only once they are real and public. */
    socials: { label: string; url: string }[];
  };
  officers: Officer[];
  officersNote: string;
  conferences: ConferenceEntry[];
  pillars: Pillar[];
  membershipNote: string;
  // ---------------------------------------------------------------------
  // Unresolved. Do not populate these without an explicit instruction and a
  // verifiable source. `legalStatus` in particular is a deliberate silence:
  // the site makes no claim about incorporation or nonprofit status anywhere.
  // ---------------------------------------------------------------------
  legalStatus: null;
  foundedYear: null;
  mailingAddress: null;
};

export const org: OrgData = {
  name: "Global Youth AI & STEM Foundation",
  acronym: "GYST-AI",
  tagline: "Connecting Young Minds with AI and Biomedical Discovery",
  mission:
    "We give high school researchers a real academic forum for their work — peer-reviewed, presented, and taken seriously.",

  contact: {
    email: "gystem.ai@gmail.com",
    socials: [],
  },

  officers: [
    {
      name: "Chenlyvia Xiong",
      role: "Founding President",
      conferenceRole: "Founding General Chair & Program Chair, inCABS 2027",
      affiliation: "Ronald Reagan High School, San Antonio, Texas",
      photoUrl: null,
    },
    {
      name: "Zimo Wen",
      role: "Secretary",
      conferenceRole: "Program Secretary, inCABS 2027",
      affiliation: "Williamsville East High School, Buffalo, New York",
      photoUrl: null,
    },
  ],
  officersNote:
    "GYST-AI is run by a fully volunteer team. The foundation is young and the team is still growing — additional officers and advisors will be listed here as they join.",

  conferences: [
    {
      acronym: "inCABS",
      year: 2027,
      name: "The International NextGen Conference on AI in Biomedical Sciences",
      theme: "Artificial Intelligence in Biomedical Sciences",
      description:
        "A forum created by and for high school students interested in AI, medicine, biology, and the future of science. Original research is submitted, peer-reviewed by a Technical Program Committee, and presented in person as an oral or poster session.",
      status: "Inaugural edition · Call for Papers open",
      dates: "July 8–10, 2027",
      location: "Washington, D.C., USA",
      url: INCABS_URL,
      cfpUrl: `${INCABS_URL}/cfp/inCABS-2027-call-for-papers.pdf`,
      cfpSizeLabel: "PDF, 2.1 MB",
      logoUrl: "/images/incabs-logo.png",
    },
  ],

  pillars: [
    {
      title: "We run international conferences",
      description:
        "Not science fairs. Students submit original research papers, present them to an audience of peers, and take part in a program built the way academic conferences are built.",
      accent: "var(--color-accent)",
    },
    {
      title: "We put student work through real peer review",
      description:
        "Every submission is evaluated by approximately three independent reviewers on a Technical Program Committee, against the same criteria used in professional venues: originality, technical merit, methodological rigor, and significance.",
      accent: "var(--color-secondary)",
    },
    {
      title: "We keep the door open worldwide",
      description:
        "There are no geographic restrictions on participation. Students from any recognized high school, anywhere, working alone or in a team, are eligible to submit.",
      accent: "var(--color-secondary-alt)",
    },
  ],

  membershipNote:
    "Membership and sponsorship are being organized now. There is nothing to pay and nothing to sign — get in touch and we will tell you what's involved once the details are settled.",

  legalStatus: null,
  foundedYear: null,
  mailingAddress: null,
};
