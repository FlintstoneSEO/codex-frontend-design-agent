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
  source: "Current published justiceleagueglm.org website",
  observedAt: "2026-08-07",
  approvalStatus: "approved"
};

export const vision = {
  summary:
    "The Justice League connects faith and racial justice through reparations, with predominantly white houses of worship participating in repair for the harms of slavery and unequal wealth accumulation.",
  commitments: [
    "Build a reparations fund through faith-based, individual, corporate, and community contributions.",
    "Use an African American Advisory Council to govern reparations distributions.",
    "Direct the work through three pillars: educational scholarships, homeownership, and business entrepreneurship."
  ],
  sourceUrl: "https://www.justiceleagueglm.org/vision-justice-league-lansing",
  observedAt: "2026-08-07"
} as const;

export const repairersOfTheBreach = [
  "StableCommunities Foundation",
  "Mason First Presbyterian Church",
  "Reachout Christian Center Church",
  "University United Methodist Church",
  "Restorative Actions",
  "Lansing Church of God In Christ",
  "Kingdom Ministries",
  "Matthew 25",
  "Unity Spiritual Center of Lansing",
  "Edgewood UCC",
  "Unitarian Universalist Church of Greater Lansing",
  "Holt First Presbyterian Church",
  "Red Cedar Friends",
  "University Lutheran Church",
  "Grace Lutheran Church",
  "All Saints Episcopal",
  "Sycamore Creek",
  "Lansing First Presbyterian"
] as const;

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
    ["Dr. Nakia Parker", "Board Member / Advisory Council"],
    ["Dr. Sean L. Holland", "Board Member / Advisory Council"]
  ],
  advisory: [
    "Courtney Minor",
    "Terrence J. King",
    "Bishop Samuel Duncan, Jr.",
    "Cheryl Smith",
    "David Foreman",
    "Betty Sanford",
    "Tony Willis"
  ]
} as const;

export const participationPaths: ParticipationPath[] = [
  { label: "Attend a general meeting", description: "Ask to attend a future general meeting and receive the current access details from the organization.", availability: "confirmed", destination: "form" },
  { label: "Join a committee", description: "Tell the Justice League which area of committee work interests you.", availability: "confirmed", destination: "form" },
  { label: "Request a presentation", description: "Start a conversation about a Justice League presentation for a congregation or community group.", availability: "confirmed", destination: "form" },
  { label: "Receive email updates", description: "Request Justice League news, event, and initiative updates.", availability: "confirmed", destination: "newsletter" }
];

export const supportHandoffs: SupportHandoff[] = [
  {
    label: "Reparations payment",
    description: "Funding for Justice League initiatives that address the racial wealth gap in Greater Lansing.",
    verifiedWixActionUrl: "https://www.justiceleagueglm.org/donate"
  },
  {
    label: "Administration donation",
    description: "Operational support used to manage the Justice League's reparations initiatives effectively.",
    verifiedWixActionUrl: "https://www.justiceleagueglm.org/donate"
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
