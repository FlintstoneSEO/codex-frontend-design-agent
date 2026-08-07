import fallbackSnapshot from "../data/donors-fallback.json" with { type: "json" };
import { parseDonorCsv, validateDonorGroups, type DonorGroup } from "./donor-csv.ts";

export const donorReportUrl =
  "https://justiceleagueglm.littlegreenlight.com/rptlink/c6a0a3da-df47-45f3-969e-53a4586160d0";

export type DonorDataResult = {
  state: "live" | "fallback" | "unavailable";
  groups: DonorGroup[];
  observedAt?: string;
  message?: string;
};

type LoadDonorOptions = {
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  fallback?: unknown;
};

function validatedFallback(value: unknown): { observedAt?: string; groups: DonorGroup[] } {
  if (!value || typeof value !== "object") throw new Error("Donor fallback is invalid.");
  const snapshot = value as { observedAt?: unknown; groups?: unknown };
  const observedAt = typeof snapshot.observedAt === "string" ? snapshot.observedAt : undefined;
  return { observedAt, groups: validateDonorGroups(snapshot.groups) };
}

export async function loadDonorGroups(options: LoadDonorOptions = {}): Promise<DonorDataResult> {
  const fetchImpl = options.fetchImpl ?? fetch;
  const timeoutMs = options.timeoutMs ?? 8_000;

  try {
    const response = await fetchImpl(donorReportUrl, {
      headers: { Accept: "text/csv" },
      signal: AbortSignal.timeout(timeoutMs)
    });
    if (!response.ok) throw new Error(`LGL request returned HTTP ${response.status}.`);

    const groups = parseDonorCsv(await response.text());
    if (groups.length === 0) throw new Error("LGL donor report produced no public donor groups.");
    return {
      state: "live",
      groups,
      observedAt: new Date().toISOString().slice(0, 10)
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown LGL donor report error.";
    console.warn(`[donors] Live Little Green Light report unavailable: ${reason}`);

    try {
      const fallback = validatedFallback(options.fallback ?? fallbackSnapshot);
      if (fallback.groups.length === 0) throw new Error("Sanitized donor fallback is empty.");
      return {
        state: "fallback",
        groups: fallback.groups,
        observedAt: fallback.observedAt,
        message: "The live donor report could not be refreshed during this build. This page is showing the last verified public snapshot."
      };
    } catch (fallbackError) {
      const fallbackReason = fallbackError instanceof Error ? fallbackError.message : "Unknown fallback error.";
      console.error(`[donors] Sanitized fallback unavailable: ${fallbackReason}`);
      return {
        state: "unavailable",
        groups: [],
        message: "The donor acknowledgment is temporarily unavailable. No substitute or fabricated donor data has been shown."
      };
    }
  }
}
