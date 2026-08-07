import { describe, expect, test } from "vitest";
import { getOpeningHoursSpecification } from "./openingHours";
import { locations } from "../data/locations";

const clock = (h) => `${String(h).padStart(2, "0")}:00`;
const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

describe("getOpeningHoursSpecification matches locations.js", () => {
  // Runs for every branch, so a new location is covered automatically.
  for (const branchKey of Object.keys(locations)) {
    const { hours } = locations[branchKey];

    test(`${branchKey}: weekday opens/closes match locations.js`, () => {
      const specs = getOpeningHoursSpecification(branchKey);
      const weekday = specs.find((s) => Array.isArray(s.dayOfWeek));
      expect(weekday).toBeDefined();
      expect(weekday.opens).toBe(clock(hours.regular.open));
      expect(weekday.closes).toBe(clock(hours.regular.close));
    });

    test(`${branchKey}: Sunday hours match locations.js`, () => {
      const sunday = getOpeningHoursSpecification(branchKey).find(
        (s) => s.dayOfWeek === "Sunday",
      );
      if (hours.closedDays.includes(0)) {
        expect(sunday).toBeUndefined();
      } else {
        expect(sunday.opens).toBe(clock(hours.sunday.open));
        expect(sunday.closes).toBe(clock(hours.sunday.close));
      }
    });

    test(`${branchKey}: closed days are excluded from the JSON-LD`, () => {
      const listedDays = getOpeningHoursSpecification(branchKey).flatMap((s) =>
        Array.isArray(s.dayOfWeek) ? s.dayOfWeek : [s.dayOfWeek],
      );
      for (const closedDay of hours.closedDays) {
        expect(listedDays).not.toContain(DAY_NAMES[closedDay]);
      }
    });
  }

  // Guards the specific regression that was fixed by hand in layout.js.
  test("Grand Drive weekday hours close at 19:00 and exclude Monday", () => {
    const weekday = getOpeningHoursSpecification("grandDrive").find((s) =>
      Array.isArray(s.dayOfWeek),
    );
    expect(weekday.closes).toBe("19:00");
    expect(weekday.dayOfWeek).not.toContain("Monday");
  });
});
