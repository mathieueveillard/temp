interface Fraction {
  readonly numerator: number;
  readonly denominator: number;
}

function add(f1: Fraction, f2: Fraction): Fraction {
  if (f1.denominator !== f2.denominator) {
    // Not implemented yet, but that's not the point here
  }
  return {
    numerator: f1.numerator + f2.numerator,
    denominator: f1.denominator,
  };
}

test("Adding fractions in an OOP paradigm", function () {
  // GIVEN
  const f1: Fraction = { numerator: 1, denominator: 3 };
  const f2: Fraction = { numerator: 1, denominator: 3 };

  // WHEN
  const actual = add(f1, f2);

  // THEN
  const expected: Fraction = { numerator: 2, denominator: 3 };
  expect(actual).toEqual(expected);
});
