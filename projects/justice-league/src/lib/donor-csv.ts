export type DonorGroup = {
  year: number;
  donors: string[];
};

const yearHeaderPattern = /^(\d{4}) - FY$/;
const donorNameHeader = "Addressee";
const donorCollator = new Intl.Collator("en-US", {
  sensitivity: "base",
  numeric: true
});

function pushRow(rows: string[][], row: string[]) {
  if (row.some((value) => value.trim() !== "")) rows.push(row);
}

export function parseCsvRecords(csv: string): string[][] {
  const text = csv.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  let quotedFieldClosed = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (inQuotes) {
      if (character === '"') {
        if (text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          inQuotes = false;
          quotedFieldClosed = true;
        }
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      if (field.length > 0 || quotedFieldClosed) {
        throw new Error("Malformed CSV: unexpected quote in an unquoted field.");
      }
      inQuotes = true;
      continue;
    }

    if (character === ",") {
      row.push(field);
      field = "";
      quotedFieldClosed = false;
      continue;
    }

    if (character === "\n" || character === "\r") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(field);
      pushRow(rows, row);
      row = [];
      field = "";
      quotedFieldClosed = false;
      continue;
    }

    if (quotedFieldClosed && !/\s/.test(character)) {
      throw new Error("Malformed CSV: content follows a closed quoted field.");
    }

    field += character;
  }

  if (inQuotes) throw new Error("Malformed CSV: unterminated quoted field.");
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    pushRow(rows, row);
  }

  return rows;
}

export function parseDonorCsv(csv: string): DonorGroup[] {
  const records = parseCsvRecords(csv);
  if (records.length < 2) throw new Error("Donor CSV contains no data rows.");

  const [headers, ...rows] = records;
  const donorNameIndex = headers.indexOf(donorNameHeader);
  if (donorNameIndex === -1) {
    throw new Error(`Donor CSV is missing the required ${donorNameHeader} header.`);
  }

  const yearColumns = headers.flatMap((header, index) => {
    const match = yearHeaderPattern.exec(header.trim());
    return match ? [{ year: Number(match[1]), index }] : [];
  });
  if (yearColumns.length === 0) throw new Error("Donor CSV contains no fiscal-year columns.");

  const donorsByYear = new Map<number, Set<string>>(
    yearColumns.map(({ year }) => [year, new Set<string>()])
  );

  rows.forEach((values, rowIndex) => {
    if (values.length !== headers.length) {
      throw new Error(`Malformed donor CSV row ${rowIndex + 2}: expected ${headers.length} fields and received ${values.length}.`);
    }

    const donorName = values[donorNameIndex]?.trim();
    if (!donorName) return;

    yearColumns.forEach(({ year, index }) => {
      const rawValue = values[index]?.trim() ?? "";
      if (rawValue === "") return;
      const value = Number(rawValue);
      if (!Number.isFinite(value)) {
        throw new Error(`Malformed donor CSV row ${rowIndex + 2}: ${year} fiscal-year value is not numeric.`);
      }
      if (value > 0) donorsByYear.get(year)?.add(donorName);
    });
  });

  return [...donorsByYear]
    .map(([year, donors]) => ({
      year,
      donors: [...donors].sort(donorCollator.compare)
    }))
    .filter((group) => group.donors.length > 0)
    .sort((left, right) => right.year - left.year);
}

export function validateDonorGroups(value: unknown): DonorGroup[] {
  if (!Array.isArray(value)) throw new Error("Donor fallback is not an array.");

  const normalized = value.map((candidate) => {
    if (!candidate || typeof candidate !== "object") throw new Error("Donor fallback contains an invalid group.");
    const { year, donors } = candidate as Partial<DonorGroup>;
    if (!Number.isInteger(year) || !Array.isArray(donors)) throw new Error("Donor fallback group has an invalid shape.");

    const names = donors.map((name) => {
      if (typeof name !== "string" || name.trim() === "") throw new Error("Donor fallback contains an invalid name.");
      return name.trim();
    });

    return { year: year as number, donors: [...new Set(names)].sort(donorCollator.compare) };
  });

  return normalized.filter((group) => group.donors.length > 0).sort((left, right) => right.year - left.year);
}
