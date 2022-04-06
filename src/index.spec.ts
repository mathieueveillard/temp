class Fraction {
  constructor(public numerator: number, public denominator: number) {}

  add(other: Fraction): void {
    if (this.denominator !== other.denominator) {
      // Not implemented yet, but that's not the point here
    }
    this.numerator += other.numerator;
  }
}

test("Adding fractions in an OOP paradigm", function () {
  // GIVEN
  const f1 = new Fraction(1, 3);
  const f2 = new Fraction(1, 3);

  // WHEN
  f1.add(f2);

  // THEN
  const expected = new Fraction(2, 3);
  expect(f1).toEqual(expected);
});
