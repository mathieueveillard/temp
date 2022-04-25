test("Actual function call…", function () {
  function spareMoney(amount: number): number {
    wealth += amount;
    return wealth;
  }
  let wealth = 1000;
  const actual = spareMoney(300);
  expect(actual).toEqual(1300);
  expect(wealth).toEqual(1300);
});

test("…replaced by its result", function () {
  let wealth = 1000;
  const actual = 1300;
  expect(actual).toEqual(1300);
  expect(wealth).toEqual(1000); // Not 1300 anymore!
});

// Pure = no side cause (scope, XHR, randomness, time) + no side effect (scope, XHR, logging)
