type RandomGenerator = () => number;

function binaryRandomGenerator(generator: RandomGenerator): 0 | 1 {
  return generator() < 0.5 ? 0 : 1;
}

binaryRandomGenerator(Math.random);

test("", function () {
  // GIVEN
  const random = () => 0.3;

  // WHEN
  const actual = binaryRandomGenerator(random);

  // THEN
  const expected: number = 0;
  expect(actual).toEqual(expected);
});

test("", function () {
  // GIVEN
  const random = () => 0.6;

  // WHEN
  const actual = binaryRandomGenerator(random);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});
