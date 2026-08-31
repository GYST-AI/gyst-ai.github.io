// Single source of truth for everything this site asserts about GYST-AI.
//
// Every value here traces to references/cfp inCABS 2027 final.pdf (the
// finalized Call for Papers), to the founder's written statement of the
// foundation's purpose, or to a decision recorded in CLAUDE.md. Unknown values
// are `null`, never an empty string, and never a placeholder value intended to
// be replaced later — placeholders get shipped by accident. `null` is what
// makes <TBA /> fire.

/** The inCABS 2027 conference site. Every cross-site link uses this, so the
 *  URL exists in exactly one place if it ever changes (e.g. to incabs.org). */
export const INCABS_URL = "https://incabs-2027.github.io";

/** A named person on the site. Officers and directors are the same shape, so
 *  one card component renders both. No person appears in any array below
 *  without confirmed consent — see CLAUDE.md. */
export type Person = {
  name: string;
  /** Role held within the foundation, e.g. "Founding President", "Chair". */
  role: string;
  /** A second role this person holds, e.g. on a conference. Null if none. */
  conferenceRole: string | null;
  affiliation: string | null;
  photoUrl: string | null;
};

/** Someone running the foundation day to day. */
export type Officer = Person;

/** A member of the Board of Directors, which governs the foundation. */
export type Director = Person;

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
  /** The foundation's stated purpose, from the founder. This is a statement of
   *  purpose, not of legal or tax status — see `legalStatus` below. */
  purpose: string;
  /** Who the foundation serves. Broader than any single conference's
   *  eligibility rules, which belong to that conference and are stated on its
   *  own site — never restated here as a foundation-level fact. */
  learnerScope: string;
  /** Fields of study the foundation covers. Wider than inCABS's AI +
   *  biomedical focus. */
  disciplines: string[];
  /** What the foundation is organized to do. This is scope, not a schedule:
   *  only `conferences` below describes something that actually exists. */
  activities: string[];
  contact: {
    email: string;
    /** No accounts exist yet. Populate only once they are real and public. */
    socials: { label: string; url: string }[];
  };
  /** The governing board. No director is listed without the founder's explicit
   *  confirmation by name. An unconfirmed director must not ship. */
  board: Director[];
  boardNote: string;
  officers: Officer[];
  officersNote: string;
  conferences: ConferenceEntry[];
  pillars: Pillar[];
  membershipNote: string;
  // ---------------------------------------------------------------------
  // Unresolved. Do not populate these without an explicit instruction and a
  // verifiable source. `legalStatus` in particular is a deliberate silence:
  // the site states the foundation's charitable and educational *purpose*,
  // but makes no claim about incorporation, nonprofit recognition, or tax
  // status anywhere, and solicits no donations.
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
    "We give young researchers a real academic forum for their work, where it is peer-reviewed, presented, and taken seriously.",

  purpose:
    "GYST-AI is dedicated to charitable and educational purposes for young scholars, before university, who want to advance their learning and research in the sciences, and to widening access to those opportunities.",

  learnerScope:
    "Secondary-school students and other learners who have not yet begun postsecondary education, anywhere in the world.",

  disciplines: [
    "Biomedical sciences",
    "Artificial intelligence",
    "Medicine",
    "Technology",
    "Related STEM disciplines",
  ],

  activities: [
    "Educational conferences",
    "Lectures",
    "Workshops",
    "Research opportunities",
    "Mentorship",
    "Competitions",
  ],

  contact: {
    email: "gystem.ai@gmail.com",
    socials: [],
  },

  // Confirmed by the founder, by name, on 2026-08-31. Nobody is added here
  // without that same explicit confirmation. See CLAUDE.md, integrity rule 4.
  board: [
    {
      name: "Anthony Rios",
      role: "Director",
      conferenceRole: null,
      affiliation:
        "Associate Professor, Information Systems and Cybersecurity, University of Texas at San Antonio, Texas",
      photoUrl: null,
    },
    {
      name: "H Chad Lane",
      role: "Director",
      conferenceRole: null,
      affiliation:
        "Professor, College of Education, University of Illinois Urbana-Champaign, Illinois",
      photoUrl: null,
    },
    {
      name: "Chenlyvia Xiong",
      role: "Director",
      conferenceRole: "Founding President, GYST-AI",
      affiliation: "Ronald Reagan High School, San Antonio, Texas",
      photoUrl: null,
    },
    {
      name: "Dana L. Suskind, MD",
      role: "Director",
      conferenceRole: null,
      affiliation: "Professor of Surgery, University of Chicago, Illinois",
      photoUrl: null,
    },
    {
      name: "Jinjun Xiong",
      role: "Director",
      conferenceRole: null,
      affiliation:
        "Founding Dean, College of AI, Cyber and Computing, University of Texas at San Antonio, Texas",
      photoUrl: null,
    },
  ],
  boardNote:
    "Directors serve as volunteers. We will add further appointments here as they are confirmed.",

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
    "GYST-AI is run by a fully volunteer team. The foundation is young and the team is still growing. Additional officers and advisors will be listed here as they join.",

  conferences: [
    {
      acronym: "inCABS",
      year: 2027,
      name: "The International NextGen Conference on AI in Biomedical Sciences",
      theme: "Artificial Intelligence in Biomedical Sciences",
      description:
        "A forum created by and for high school students interested in AI, medicine, biology, and the future of science. Original research is submitted, peer-reviewed by a Technical Program Committee, and presented in person as an oral or poster session.",
      status: "Inaugural edition, Call for Papers open",
      dates: "July 8-10, 2027",
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
        "A step beyond the science fair. Students submit original research papers, present them to an audience of peers, and take part in a program built the way academic conferences are built. Conferences are the first thing we run, and not the only thing we are built to run.",
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
        "Widening access to science and emerging technology is part of the point. There are no geographic restrictions on taking part, and no program of ours assumes a student arrives with a laboratory, a mentor, or a budget behind them.",
      accent: "var(--color-secondary-alt)",
    },
  ],

  membershipNote:
    "Membership and sponsorship are being organized now. There is nothing to pay and nothing to sign. Get in touch and we will tell you what's involved once the details are settled.",

  legalStatus: null,
  foundedYear: null,
  mailingAddress: null,
};
