// Ramda, Lodash
// Partial application: arity 2 => arity 1
function partial(fn, firstArgument) {
  return function (i) {
    return fn(firstArgument, i);
  };
}

function partialRight(fn, secondArgument) {
  return function (i) {
    return fn(i, secondArgument);
  };
}

// arity: 2
function isMultipleOf(of: number, i: number): boolean {
  return i % of === 0;
}

// arity: 1
// function isMultipleOf3(i: number): boolean {
//   return isMultipleOf(3, i);
// }

test("Ok, but…", function () {
  // const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => isMultipleOf(3, i));
  // const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => isMultipleOf3(i));
  const isMultipleOf3 = partial(isMultipleOf, 3);
  const actual = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isMultipleOf3);
  expect(actual).toEqual([0, 3, 6, 9]);
});
