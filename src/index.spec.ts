test("", function () {
  let wealth = 0;
  function spareMoney(wealth: number, amount: number): number {
    return wealth + amount;
  }
  expect(spareMoney(0, 1000)).toEqual(1000);
  expect(spareMoney(500, 1000)).toEqual(1500);
  wealth = spareMoney(wealth, 1000); // 1000
  wealth = spareMoney(wealth, 1000); // 2000
});
