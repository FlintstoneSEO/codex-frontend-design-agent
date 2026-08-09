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
  faq: "https://www.justiceleagueglm.org/faq",
  gallery: "https://www.justiceleagueglm.org/gallery",
  apology2023: "https://www.justiceleagueglm.org/apology-2023",
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
      { label: "Scholarship FAQ", href: "/scholarship/#frequently-asked-questions" },
      { label: "Impact and accountability", href: "/impact/" },
      { label: "Supporters", href: "/supporters/" },
      { label: "Donors", href: "/donors/" }
    ]
  },
  {
    label: "Events & Meetings",
    items: [
      { label: "Upcoming events", href: "/events/" },
      { label: "Committee meetings", href: "/events/#meeting-schedule" },
      { label: "Ad booklet", href: "/ad-booklet/" }
    ]
  },
  {
    label: "News & Media",
    items: [
      { label: "Recent news and videos", href: "/news/" },
      { label: "Photos & videos", href: "/media/" },
      { label: "Apology 2023", href: "/about/history/#apology-2023" },
      { label: "E-News Briefs", href: "/news/#enews-heading" }
    ]
  },
  { label: "Join the Work", href: "/join-the-work/" }
] as const;


