test("Can you make this work as expected?", function () {
  const fns = [];

  function createClosure(value: number) {
    return function (): number {
      return value;
    };
  }

  for (var i = 0; i < 4; i++) {
    const fn = createClosure(i);
    fns.push(fn);
  }

  expect(fns[0]()).toEqual(0);
  expect(fns[1]()).toEqual(1);
  expect(fns[2]()).toEqual(2);
  expect(fns[3]()).toEqual(3);
  // expect(actual).toEqual([4, 4, 4, 4]); // Actual behavior
});
