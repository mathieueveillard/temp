// Curryfication
// function isMultipleOf(of: number, i: number): boolean {
//   return i % of === 0;
// }

const isMultipleOf =
  (of: number) =>
  (i: number): boolean =>
    i % of === 0;

test("Ok, but…", function () {
  const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isMultipleOf(3));
  expect(actual).toEqual([0, 3, 6, 9]);
});
