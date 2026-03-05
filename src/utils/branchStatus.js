import { locations, specialClosures } from "../data/locations";

export const isBranchOpen = (branch) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const today = now.toDateString();

  // Check for special closures first
  if (specialClosures.includes(today)) {
    return { status: "Closed for Holiday", closesAt: null };
  }

  const { hours } = locations[branch];

  if (hours.closedDays.includes(day)) {
    return { status: "Closed", closesAt: null };
  }

  if (day === 0) {
    // Sunday
    const { open, close } = hours.sunday;
    if (hour >= open && hour < close) {
      return { status: "Open Now", closesAt: `${close}:00` };
    }
    return { status: "Closed", closesAt: null };
  }

  const { open, close } = hours.regular;
  if (hour >= open && hour < close) {
    return { status: "Open Now", closesAt: `${close}:00` };
  }
  return { status: "Closed", closesAt: null };
};
export const getNextOpenTime = (branch) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const { hours } = locations[branch];
  const { regular, sunday, closedDays } = hours;

  // Check if the shop hasn't opened yet TODAY
  if (!closedDays.includes(day)) {
    if (day === 0) {
      if (hour < sunday.open) {
        return `Opens today at ${sunday.open}:00`;
      }
    } else {
      if (hour < regular.open) {
        return `Opens today at ${regular.open}:00`;
      }
    }
  }

  // If we're past closing time or it's a closed day, find the next open day
  if (day === 0) {
    return closedDays.includes(1)
      ? `Opens at ${regular.open}:00 on Tuesday`
      : `Opens at ${regular.open}:00 tomorrow`;
  }

  for (let i = 1; i <= 7; i++) {
    let nextDay = (day + i) % 7;
    if (!closedDays.includes(nextDay)) {
      const nextOpenTime = nextDay === 0 ? sunday.open : regular.open;
      const dayName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return nextDay === (day + 1) % 7
        ? `Opens at ${nextOpenTime}:00 tomorrow`
        : `Opens at ${nextOpenTime}:00 on ${dayName[nextDay]}`;
    }
  }
  return "Closed indefinitely";
};
