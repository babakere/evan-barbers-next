import { isBranchOpen, getNextOpenTime } from "./branchStatus";

// Helper to set a fake date/time
const setMockDate = (dateString) => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(dateString));
};

afterEach(() => {
  jest.useRealTimers();
});

describe("isBranchOpen", () => {
  test("Grand Drive is open on a Tuesday at 2pm", () => {
    setMockDate("2026-03-10T14:00:00"); // Tuesday 2pm
    const result = isBranchOpen("grandDrive");
    expect(result.status).toBe("Open Now");
  });

  test("Grand Drive is closed on Monday", () => {
    setMockDate("2026-03-09T12:00:00"); // Monday midday
    const result = isBranchOpen("grandDrive");
    expect(result.status).toBe("Closed");
  });

  test("Wimbledon is open on Monday", () => {
    setMockDate("2026-03-09T12:00:00"); // Monday midday
    const result = isBranchOpen("wimbledon");
    expect(result.status).toBe("Open Now");
  });

  test("both branches closed before opening time", () => {
    setMockDate("2026-03-10T07:00:00"); // Tuesday 7am
    expect(isBranchOpen("grandDrive").status).toBe("Closed");
    expect(isBranchOpen("wimbledon").status).toBe("Closed");
  });

  test("both branches closed after closing time", () => {
    setMockDate("2026-03-10T20:00:00"); // Tuesday 8pm
    expect(isBranchOpen("grandDrive").status).toBe("Closed");
    expect(isBranchOpen("wimbledon").status).toBe("Closed");
  });

  test("Sunday hours are different", () => {
    setMockDate("2026-03-08T09:30:00"); // Sunday 9:30am
    expect(isBranchOpen("grandDrive").status).toBe("Closed"); // opens at 10
    setMockDate("2026-03-08T10:30:00"); // Sunday 10:30am
    expect(isBranchOpen("grandDrive").status).toBe("Open Now");
  });

  test("closed on Christmas Day", () => {
    setMockDate("2026-12-25T12:00:00"); // Christmas
    expect(isBranchOpen("grandDrive").status).toBe("Closed for Holiday");
    expect(isBranchOpen("wimbledon").status).toBe("Closed for Holiday");
  });
});

describe("getNextOpenTime", () => {
  test("shows today if before opening time on a working day", () => {
    setMockDate("2026-03-10T07:00:00"); // Tuesday 7am
    const result = getNextOpenTime("grandDrive");
    expect(result).toBe("Opens today at 9:00");
  });

  test("shows tomorrow after closing time on Tuesday", () => {
    setMockDate("2026-03-10T20:00:00"); // Tuesday 8pm
    const result = getNextOpenTime("wimbledon");
    expect(result).toBe("Opens at 9:00 tomorrow");
  });

  test("Grand Drive skips Monday - shows Tuesday", () => {
    setMockDate("2026-03-08T18:00:00"); // Sunday 6pm (after close)
    const result = getNextOpenTime("grandDrive");
    expect(result).toBe("Opens at 9:00 on Tuesday");
  });

  test("Wimbledon shows Monday after Sunday close", () => {
    setMockDate("2026-03-08T18:00:00"); // Sunday 6pm
    const result = getNextOpenTime("wimbledon");
    expect(result).toBe("Opens at 9:00 tomorrow");
  });
});
