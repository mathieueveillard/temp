test("Can you make this work as expected?", function () {
  const fns = [];

  for (var i = 0; i < 4; i++) {
    const fn = function () {
      return i;
    };
    fns.push(fn);
  }

  const actual = fns.map((fn) => fn());
  // expect(actual).toEqual([4, 4, 4, 4]); // Actual behavior
  expect(actual).toEqual([0, 1, 2, 3]); // Expected behavior
});
