import { DateTime } from "luxon";

function computeElapsedTimeInDays(now: DateTime, since: DateTime): number {
  return now.diff(since).as("days");
}

test("This function can now be tested!", function () {
  const now = DateTime.fromObject({ year: 2022, month: 4, day: 1 });
  const since = DateTime.fromObject({ year: 2022, month: 4, day: 1 });
  expect(computeElapsedTimeInDays(now, since)).toEqual(0);
});
