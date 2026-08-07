export type ReviewStatus = "provisional" | "needs-review" | "approved";

export type PageReviewMetadata = {
  source: string;
  observedAt: string;
  approvalStatus: ReviewStatus;
  owner?: string;
  reviewDate?: string;
};

export type ContentResult<T> =
  | { state: "success"; data: T; review: PageReviewMetadata }
  | { state: "empty"; message: string }
  | { state: "error"; message: string }
  | { state: "stale"; data: T; message: string; review: PageReviewMetadata };

export type EventSummary = {
  slug: string;
  title: string;
  publicStatus: "active" | "past" | "closed" | "demonstration";
  startsAt?: string;
  timeZone?: string;
  location?: string;
  accessibility?: string;
  canonicalUrl: string;
  verifiedWixActionUrl?: string;
};

export type EventDetail = EventSummary & {
  description: string;
  organizer?: string;
  cost?: string;
};

export type StorySummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt?: string;
  publisher?: string;
  canonicalUrl: string;
};

export type StoryDetail = StorySummary & {
  body: string[];
  sourceNotes: string[];
  correctedAt?: string;
  relatedHref?: string;
};

export type ParticipationPath = {
  label: string;
  description: string;
  availability: "provisional" | "confirmed";
  destination: "form" | "newsletter" | "contact";
};

export type SupportHandoff = {
  label: string;
  description: string;
  verifiedWixActionUrl?: string;
};

export const currentSiteReview: PageReviewMetadata = {
  source: "Current public justiceleagueglm.org content summarized for this project",
  observedAt: "2026-08-06",
  approvalStatus: "provisional"
};

export const leadership = {
  executive: [
    ["Willye Bryan", "Founder"],
    ["Prince Solace", "President"],
    ["Ross Yednock", "Treasurer and Board Member"],
    ["Dana Watson", "Secretary and Board Member"]
  ],
  board: [
    ["Sarah Allen", "Board Chair"],
    ["Betsy Sneller", "Board Member"],
    ["Peggy Vaughn-Payne", "Board Member"],
    ["Dr. Nakia Parker", "Board Member"],
    ["Dr. Sean L. Holland", "Board Member"]
  ],
  advisory: [
    "Courtney Minor",
    "Terrence J. King",
    "Bishop Samuel Duncan Jr.",
    "Cheryl Smith",
    "David Foreman",
    "Betty Sanford",
    "Tony Willis"
  ]
} as const;

export const participationPaths: ParticipationPath[] = [
  { label: "Attend a meeting", description: "Express interest in a future general meeting; public access and dates still require confirmation.", availability: "provisional", destination: "form" },
  { label: "Join a committee", description: "Share the kind of work you want to contribute to; active committees still require confirmation.", availability: "provisional", destination: "form" },
  { label: "Request a presentation", description: "Start a conversation about hosting a presentation for a congregation or community group.", availability: "provisional", destination: "form" },
  { label: "Volunteer", description: "Describe the time or skills you may be able to offer; this is not a promise of placement.", availability: "provisional", destination: "form" },
  { label: "Become a community partner", description: "Open a partnership inquiry without implying an existing partner program or benefit.", availability: "provisional", destination: "contact" },
  { label: "Receive email updates", description: "Review the newsletter signup shell; no subscription is created in this prototype.", availability: "provisional", destination: "newsletter" }
];

export const supportHandoffs: SupportHandoff[] = [
  {
    label: "Reparations payment",
    description: "The current site describes this designation as support for initiatives addressing the racial wealth gap. Final use-of-funds wording requires approval."
  },
  {
    label: "Administration donation",
    description: "The current site describes this designation as support for operating costs. Final financial and legal wording requires approval."
  }
];

export const demoEvent: EventDetail = {
  slug: "demo-priority",
  title: "Demonstration event detail",
  publicStatus: "demonstration",
  canonicalUrl: "/events/demo-priority/",
  description: "This structural fixture shows where an approved event description would appear. It is not a real event or invitation."
};

export const demoStory: StoryDetail = {
  slug: "demo-story",
  title: "Demonstration story structure",
  excerpt: "A labelled fixture for reviewing editorial hierarchy, source notes, and related actions.",
  canonicalUrl: "/news/demo-story/",
  body: [
    "[PLACEHOLDER: An approved story introduction would establish who, what, where, and when without inventing community testimony.]",
    "[PLACEHOLDER: Supporting paragraphs would add verified context, names, dates, captions, and links to original sources.]"
  ],
  sourceNotes: ["[NEEDS CLIENT INPUT: Connect Wix Blog or CMS and approve publisher, source, media, and corrections policies.]"],
  relatedHref: "/reparations/"
};
