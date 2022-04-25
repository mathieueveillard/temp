test("What's the problem, according to you?", function () {
  let step;

  function increment(value: number): number {
    return value + step;
  }

  step = 1;
  expect(increment(0)).toEqual(1);
  step = 2;
  expect(increment(0)).toEqual(2);
});

test("Different inputs, different outputs!", function () {
  function increment(step: number, value: number): number {
    return value + step;
  }
  expect(increment(1, 0)).toEqual(1);
  expect(increment(2, 0)).toEqual(2);
});
