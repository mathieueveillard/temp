interface State {
  readonly count: number;
}

function increment(state: State): State {
  return {
    ...state,
    count: state.count + 1,
  };
}

test("Don't do this, const is a false promise!", function () {
  // GIVEN
  const state: State = { count: 0 };

  // WHEN
  const actual = increment(state);

  // THEN
  expect(state.count).toEqual(0);
  expect(actual.count).toEqual(1);
});
