test("Power 2", function () {
  const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(toPower(2));
  expect(actual).toEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
});

test("Power 3", function () {
  const actual = [0, 1, 2, 3].map(toPower(3));
  expect(actual).toEqual([0, 1, 8, 27]);
});
