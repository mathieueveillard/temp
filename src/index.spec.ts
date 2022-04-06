const toPower =
  (valueToRaise: number) =>
  (power: number): number =>
    valueToRaise ** power;

test("", function () {
  const valueToRaise = 7;
  const actual = [0, 1, 2, 3].map(toPower(valueToRaise));
  expect(actual).toEqual([1, 7, 49, 49 * 7]);
});
