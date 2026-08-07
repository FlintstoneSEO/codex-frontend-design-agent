import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { wixEventsV2 } from "@wix/events";

const wixClientId =
  import.meta.env.WIX_CLIENT_ID ??
  import.meta.env.PUBLIC_WIX_CLIENT_ID ??
  "c442e998-2180-4674-a978-56b74e5626cd";

export const wixSiteId =
  import.meta.env.WIX_SITE_ID ??
  import.meta.env.PUBLIC_WIX_SITE_ID ??
  "03690829-a1bf-4449-984a-9542ff682ce7";

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

const client = createClient({
  modules: { events: wixEventsV2 },
  auth: OAuthStrategy({ clientId: wixClientId })
});

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
