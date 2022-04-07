import { DateTime } from "luxon";

const computeElapsedTimeInDays =
  (today: DateTime) =>
  (since: DateTime): number => {
    return Math.round(today.diff(since).as("days"));
  };

test("", function () {
  const today = DateTime.fromObject({
    year: 2022,
    month: 4,
    day: 7,
  });
  const yesterday = DateTime.fromObject({
    year: 2022,
    month: 4,
    day: 6,
  });
  expect(computeElapsedTimeInDays(today)(yesterday)).toEqual(1);
});
