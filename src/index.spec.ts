type RandomGenerator = () => number; // between 0 and 1.

function binaryRandomGenerator(randomGenerator: RandomGenerator): 0 | 1 {
  return randomGenerator() < 0.5 ? 0 : 1;
}
binaryRandomGenerator(Math.random);

test("", function () {
  const randomGenerator: RandomGenerator = () => 0.124;
  expect(binaryRandomGenerator(randomGenerator)).toEqual(0);
});

test("", function () {
  const randomGenerator: RandomGenerator = () => 0.66;
  expect(binaryRandomGenerator(randomGenerator)).toEqual(1);
});

test("", function () {
  const randomGenerator: RandomGenerator = () => 0.5;
  expect(binaryRandomGenerator(randomGenerator)).toEqual(1);
});
