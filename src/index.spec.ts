function isMultipleOf(of: number, i: number): boolean {
  return i % of === 0;
}

test("Ok, but…", function () {
  const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => isMultipleOf(3, i));
  expect(actual).toEqual([0, 3, 6, 9]);
});
