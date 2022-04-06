interface ProtoAverage {
  sum: number;
  count: number;
}

const initialProtoAverage: ProtoAverage = {
  sum: 0,
  count: 0,
};

const computeAverages = (array: number[]): number[] => {
  return array
    .reduce<ProtoAverage[]>((acc, cur) => {
      const { sum, count } = acc[acc.length - 1] || initialProtoAverage;
      const protoAverage: ProtoAverage = {
        sum: sum + cur,
        count: count + 1,
      };
      return [...acc, protoAverage];
    }, [])
    .map(({ sum, count }) => sum / count);
};

test("computeAverages", function () {
  expect(computeAverages([0, 1, 2, 3])).toEqual([0, 0.5, 1, 1.5]);
});
