export const site = {
  name: "Justice League of Greater Lansing Michigan",
  shortName: "Justice League GLM",
  location: "Greater Lansing, Michigan",
  email: "info@justiceleagueglm.org",
  mailingAddress: {
    line1: "P.O. Box 12105",
    line2: "Lansing, Michigan 48901"
  },
  nonprofitLabel: "Registered 501(c)(3) nonprofit",
  nonprofitDocumentUrl:
    "https://www.justiceleagueglm.org/_files/ugd/de1bf2_c3e811879e044a5281fc7ace9b1f0be0.pdf",
  irsForm1023Url:
    "https://www.justiceleagueglm.org/_files/ugd/de1bf2_0bba4b2bc8c5423a86419ee6d1eca16f.pdf",
  currentWixUrl: "https://www.justiceleagueglm.org",
  title: "Justice League of Greater Lansing | Reparations in Action",
  description:
    "Learn how the Justice League of Greater Lansing advances reparations locally, explore current work, and find ways to support or participate.",
  mission:
    "The Justice League of Greater Lansing Michigan exists to repair the breach caused by the historical damage of slavery and its aftermath. In the spirit of repentance for the sin of racism, we seek to build relationships and facilitate reparations between houses of worship and collaborative partners to increase wealth equity for African Americans in the Greater Lansing Area."
} as const;

export const currentWixRoutes = {
  events: "https://www.justiceleagueglm.org/upcomingevents",
  meetings: "https://www.justiceleagueglm.org/commiteemeetings",
  donate: "https://www.justiceleagueglm.org/donate",
  donors: "https://www.justiceleagueglm.org/donors",
  supporters: "https://www.justiceleagueglm.org/supporters",
  news: "https://www.justiceleagueglm.org/recent-news",
  newsletterArchive: "https://www.justiceleagueglm.org/e-news-briefs",
  contact: "https://www.justiceleagueglm.org/contact",
  supportCard:
    "https://www.justiceleagueglm.org/_files/ugd/de1bf2_ad850695a0424987b8096729a53c529a.pdf"
} as const;

export const primaryNav = [
  {
    label: "About",
    items: [
      { label: "About the Justice League", href: "/about/" },
      { label: "History and timeline", href: "/about/history/" },
      { label: "Leadership and governance", href: "/about/leadership/" }
    ]
  },
  {
    label: "Our Work",
    items: [
      { label: "Reparations in Greater Lansing", href: "/reparations/" },
      { label: "Reparations scholarship", href: "/scholarship/" },
      { label: "Impact and accountability", href: "/impact/" },
      { label: "Supporters", href: "/supporters/" },
      { label: "Donors", href: "/donors/" }
    ]
  },
  { label: "Events", href: "/events/" },
  { label: "News & Stories", href: "/news/" },
  { label: "Join the Work", href: "/join-the-work/" }
] as const;

export type PriorityState = "active" | "expired" | "empty" | "error";

export type PriorityFixture = {
  state: PriorityState;
  label: string;
  title: string;
  meta?: string;
  summary: string;
  href?: string;
  action?: string;
};

export const priorityFixtures: PriorityFixture[] = [
  {
    state: "active",
    label: "Demo fixture · Active state",
    title: "Demonstration priority record",
    meta: "Prototype review state — not a real event or deadline",
    summary:
      "This labelled fixture demonstrates how a current Wix campaign, event, or scholarship priority will appear after an approved record is connected.",
    href: "/events/demo-priority/",
    action: "Open demo destination"
  },
  {
    state: "expired",
    label: "Demo fixture · Closed state",
    title: "This priority has closed",
    meta: "Prototype review state — no live date is represented",
    summary:
      "Closed records keep an explicit status and remove the time-sensitive action instead of manufacturing urgency.",
    href: "/events/",
    action: "View the events shell"
  },
  {
    state: "empty",
    label: "Demo fixture · Empty state",
    title: "No current priority is configured",
    summary:
      "The homepage remains coherent when Wix has no approved priority record. The stable Support Reparations and Join the Work paths remain available."
  },
  {
    state: "error",
    label: "Demo fixture · Error state",
    title: "The current priority could not be loaded",
    summary:
      "The error state does not expose technical details or substitute stale campaign information. Reviewers can retry the local demonstration."
  }
];
