import { locations } from "../data/locations";

// getDay() index → schema.org day name
const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const toClockString = (hour) => `${String(hour).padStart(2, "0")}:00`;

/**
 * Build a schema.org `openingHoursSpecification` array for a branch straight
 * from src/data/locations.js, so the structured data and the on-site hours
 * logic (branchStatus.js) can never disagree. This is the single source of
 * truth for opening hours — update locations.js, not the JSON-LD.
 */
export function getOpeningHoursSpecification(branchKey) {
  const { hours } = locations[branchKey];
  const { regular, sunday, closedDays } = hours;
  const specs = [];

  // Monday–Saturday (getDay 1–6), excluding any closed days, share one spec.
  const weekdayNames = [1, 2, 3, 4, 5, 6]
    .filter((day) => !closedDays.includes(day))
    .map((day) => DAY_NAMES[day]);

  if (weekdayNames.length > 0) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekdayNames,
      opens: toClockString(regular.open),
      closes: toClockString(regular.close),
    });
  }

  // Sunday (getDay 0) has its own hours.
  if (!closedDays.includes(0)) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: toClockString(sunday.open),
      closes: toClockString(sunday.close),
    });
  }

  return specs;
}
