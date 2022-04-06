const computeOneAverage = (array: number[]): number => {
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return sum / array.length;
};

test("computeOneAverage", function () {
  expect(computeOneAverage([0, 1, 2])).toEqual(1);
});

// array =(reduce)=> array up to i =(map: computeOneAverage)=>
// [0, 1, 2, 3] => [0]          => 0
//              => [0, 1]       => 0.5
//              => [0, 1, 2]    => 1
//              => [0, 1, 2, 3] => 1.5

const computeIntermediaryArrays = (array: number[]): number[][] => {
  return array.reduce<number[][]>((acc, cur) => {
    if (acc.length === 0) {
      return [[cur]];
    }
    // acc = [[0], [0, 1]]
    const lastArray: number[] = acc[acc.length - 1]; // [0, 1]
    const newArray: number[] = [...lastArray, cur]; // [0, 1, 2]
    return [...acc, newArray]; // [[0], [0, 1], [0, 1, 2]]
  }, []);
};

test("computeIntermediaryArrays", function () {
  expect(computeIntermediaryArrays([0, 1, 2, 3])).toEqual([
    [0], //
    [0, 1],
    [0, 1, 2],
    [0, 1, 2, 3],
  ]);
});

const computeAverages = (array: number[]): number[] => {
  return computeIntermediaryArrays(array).map(computeOneAverage);
};

test("computeAverages", function () {
  expect(computeAverages([0, 1, 2, 3])).toEqual([0, 0.5, 1, 1.5]);
});
