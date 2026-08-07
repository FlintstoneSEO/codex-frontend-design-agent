import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import { wixEventsV2 } from "@wix/events";

const wixClientId =
  import.meta.env.WIX_CLIENT_ID ??
  import.meta.env.PUBLIC_WIX_CLIENT_ID ??
  "c442e998-2180-4674-a978-56b74e5626cd";

export const wixSiteId =
  import.meta.env.WIX_SITE_ID ??
  import.meta.env.PUBLIC_WIX_SITE_ID ??
  "03690829-a1bf-4449-984a-9542ff682ce7";

const scholarshipCollectionId =
  import.meta.env.WIX_SCHOLARSHIP_COLLECTION_ID ??
  import.meta.env.PUBLIC_WIX_SCHOLARSHIP_COLLECTION_ID ??
  "ScholarshipCycles";

export type PublicEvent = {
  id: string;
  title: string;
  startsAt: string;
  formattedDate: string;
  formattedTime?: string;
  timeZone: string;
  location?: string;
  imageUrl?: string;
  imageSrcSet?: string;
  eventUrl: string;
  actionLabel: string;
};

export type PublicEventsResult =
  | { state: "success"; events: PublicEvent[]; observedAt: string }
  | { state: "empty"; message: string; observedAt: string }
  | { state: "error"; message: string; observedAt: string };

export type ScholarshipCycleStatus = "active" | "closed" | "upcoming" | "paused";

export type ScholarshipCycle = {
  id: string;
  title: string;
  cycleLabel: string;
  publicStatus: ScholarshipCycleStatus;
  statusMessage: string;
  applicationOpenDate?: string;
  applicationDeadline?: string;
  recipientNotificationDate?: string;
  awardCount?: number;
  awardAmount?: number;
  awardCurrency?: string;
  eligibleApplicantTypes: string[];
  eligibleCounties: string[];
  requiredDocuments: string[];
  essayTopics: string[];
  applicationUrl?: string;
  contactEmail?: string;
  mailingAddress?: string;
  sourceUrl: string;
  sourceObservedAt: string;
  sourceNote?: string;
  reviewStatus: string;
};

export type ScholarshipCycleResult =
  | { state: "success"; cycle: ScholarshipCycle; fetchedAt: string }
  | { state: "stale"; cycle: ScholarshipCycle; message: string; fetchedAt: string }
  | { state: "empty"; message: string; fetchedAt: string }
  | { state: "error"; message: string; fetchedAt: string };

type ScholarshipCycleRecord = Partial<Omit<ScholarshipCycle, "id">> & {
  _id?: string;
  published?: boolean;
};

const client = createClient({
  modules: { events: wixEventsV2, items },
  auth: OAuthStrategy({ clientId: wixClientId })
});

const scholarshipFallback: ScholarshipCycle = {
  id: "source-snapshot-2026",
  title: "2026–2027 Reparations Scholarship",
  cycleLabel: "2026–2027",
  publicStatus: "closed",
  statusMessage: "The 2026 application form is closed. The current site reports that the application deadline was extended to May 1, 2026.",
  applicationOpenDate: "2026-02-28",
  applicationDeadline: "2026-05-01",
  recipientNotificationDate: "2026-05-26",
  awardCount: 10,
  awardAmount: 2500,
  awardCurrency: "USD",
  eligibleApplicantTypes: [
    "Graduating high school seniors in 2026",
    "Previous high school graduates or GED recipients",
    "Students accepted to an accredited college, university, or vocational school for 2026–2027"
  ],
  eligibleCounties: ["Ingham", "Clinton", "Eaton"],
  requiredDocuments: ["Completed application", "Unofficial high school transcript", "500-word essay"],
  essayTopics: ["The Racial Wealth Gap in America", "Generational Wealth"],
  contactEmail: "info@justiceleagueglm.org",
  mailingAddress: "Justice League of Greater Lansing Michigan\nAttn: JLGLM College Scholarship Program\nP.O. Box 12105\nLansing, Michigan 48901",
  sourceUrl: "https://www.justiceleagueglm.org/scholarship",
  sourceObservedAt: "2026-08-07",
  sourceNote: "The current page says the deadline was extended to May 1, 2026 while older sections still show April 17. The closed form and extended-deadline notice control the public status displayed by the headless page.",
  reviewStatus: "source-confirmed"
};

function cleanStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function cleanDate(value: unknown): string | undefined {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10);
  return undefined;
}

function cleanApplicationUrl(value: unknown, status: ScholarshipCycleStatus): string | undefined {
  if (status !== "active" || typeof value !== "string") return undefined;
  try {
    const url = new URL(value);
    const allowedHosts = new Set(["justiceleagueglm.org", "www.justiceleagueglm.org", "forms.wix.com"]);
    return url.protocol === "https:" && allowedHosts.has(url.hostname) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function normalizeScholarshipCycle(record: ScholarshipCycleRecord): ScholarshipCycle | undefined {
  const statuses: ScholarshipCycleStatus[] = ["active", "closed", "upcoming", "paused"];
  const publicStatus = statuses.includes(record.publicStatus as ScholarshipCycleStatus)
    ? record.publicStatus as ScholarshipCycleStatus
    : undefined;

  if (!record._id || !record.title || !record.cycleLabel || !publicStatus || !record.statusMessage || !record.sourceUrl || !record.sourceObservedAt || !record.reviewStatus) {
    return undefined;
  }

  return {
    id: record._id,
    title: record.title,
    cycleLabel: record.cycleLabel,
    publicStatus,
    statusMessage: record.statusMessage,
    applicationOpenDate: cleanDate(record.applicationOpenDate),
    applicationDeadline: cleanDate(record.applicationDeadline),
    recipientNotificationDate: cleanDate(record.recipientNotificationDate),
    awardCount: typeof record.awardCount === "number" ? record.awardCount : undefined,
    awardAmount: typeof record.awardAmount === "number" ? record.awardAmount : undefined,
    awardCurrency: typeof record.awardCurrency === "string" ? record.awardCurrency : undefined,
    eligibleApplicantTypes: cleanStrings(record.eligibleApplicantTypes),
    eligibleCounties: cleanStrings(record.eligibleCounties),
    requiredDocuments: cleanStrings(record.requiredDocuments),
    essayTopics: cleanStrings(record.essayTopics),
    applicationUrl: cleanApplicationUrl(record.applicationUrl, publicStatus),
    contactEmail: typeof record.contactEmail === "string" ? record.contactEmail : undefined,
    mailingAddress: typeof record.mailingAddress === "string" ? record.mailingAddress : undefined,
    sourceUrl: record.sourceUrl,
    sourceObservedAt: cleanDate(record.sourceObservedAt) ?? record.sourceObservedAt,
    sourceNote: typeof record.sourceNote === "string" ? record.sourceNote : undefined,
    reviewStatus: record.reviewStatus
  };
}

export async function getCurrentScholarshipCycle(): Promise<ScholarshipCycleResult> {
  const fetchedAt = new Date().toISOString();

  try {
    const response = await client.items.query<ScholarshipCycleRecord>(scholarshipCollectionId, {
      filter: { published: true },
      sort: [{ fieldName: "applicationDeadline", order: "DESC" }],
      paging: { limit: 1, offset: 0 }
    }, { consistentRead: true });

    const record = response.items[0];
    if (!record) {
      return {
        state: "empty",
        message: "No published scholarship cycle is available from Wix CMS.",
        fetchedAt
      };
    }

    const cycle = normalizeScholarshipCycle(record);
    if (!cycle) {
      return {
        state: "error",
        message: "The published scholarship record is incomplete and cannot be displayed safely.",
        fetchedAt
      };
    }

    return { state: "success", cycle, fetchedAt };
  } catch (error) {
    console.warn("The ScholarshipCycles collection could not be loaded during the Astro build.", error);
    return {
      state: "stale",
      cycle: scholarshipFallback,
      message: "Wix CMS could not be reached during this build. A dated source snapshot is shown instead.",
      fetchedAt
    };
  }
}

function eventImage(image: string | undefined, size: number) {
  if (!image) return undefined;
  return media.getScaledToFillImageUrl(image, size, Math.round(size * 0.72), {
    quality: 80,
    autoEncode: true
  });
}

function formatEventDate(value: string, timeZone: string) {
  const date = new Date(value);
  return {
    date: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone
    }).format(date),
    time: new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone,
      timeZoneName: "short"
    }).format(date)
  };
}

export async function getUpcomingPublicEvents(): Promise<PublicEventsResult> {
  const observedAt = new Date().toISOString();

  try {
    const response = await client.events
      .queryEvents({ fields: ["DETAILS", "REGISTRATION", "URLS"] })
      .eq("status", "UPCOMING")
      .ascending("dateAndTimeSettings.startDate")
      .limit(20)
      .find();

    const events = response.items
      .filter((event) => {
        const visiblePage = event.eventDisplaySettings?.hideEventDetailsPage !== true;
        return Boolean(event._id && event.title && event.dateAndTimeSettings?.startDate && event.eventPageUrl && visiblePage);
      })
      .map((event): PublicEvent => {
        const timeZone = event.dateAndTimeSettings?.timeZoneId || "America/New_York";
        const startsAt = event.dateAndTimeSettings?.startDate?.toISOString() as string;
        const formatted = formatEventDate(startsAt, timeZone);
        const image = typeof event.mainImage === "string" ? event.mainImage : undefined;
        const registrationStatus = event.registration?.status;

        return {
          id: event._id as string,
          title: event.title as string,
          startsAt,
          formattedDate: formatted.date,
          formattedTime: formatted.time,
          timeZone,
          location: event.location?.name ?? undefined,
          imageUrl: eventImage(image, 720),
          imageSrcSet: image
            ? [480, 720, 960]
                .map((width) => `${eventImage(image, width)} ${width}w`)
                .join(", ")
            : undefined,
          eventUrl: event.eventPageUrl as string,
          actionLabel: registrationStatus === "OPEN_TICKETS" ? "View tickets" : registrationStatus === "OPEN_RSVP" ? "View event and RSVP" : "View event"
        };
      });

    if (!events.length) {
      return {
        state: "empty",
        message: "No public upcoming events are currently available from Wix Events.",
        observedAt
      };
    }

    return { state: "success", events, observedAt };
  } catch (error) {
    console.warn("Wix Events could not be loaded during the Astro build.", error);
    return {
      state: "error",
      message: "Upcoming events are temporarily unavailable. The full Wix events page remains available.",
      observedAt
    };
  }
}
