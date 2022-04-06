test("Array.map", function () {
  const array: number[] = [0, 1, 2, 3];
  const increment = (n: number): number => n + 1;
  expect(array.map(increment)).toEqual([1, 2, 3, 4]);
});

test("Array.filter", function () {
  const array: number[] = [0, 1, 2, 3];
  const isOdd = (n: number): boolean => n % 2 === 1;
  expect(array.filter(isOdd)).toEqual([1, 3]);
});

test("Array.reduce", function () {
  const array: number[] = [0, 1, 2, 3];
  const sum = (accumulator: number, current: number): number => accumulator + current;
  expect(array.reduce(sum)).toEqual(6);
});

type MappingFunction<Input, Output> = (input: Input) => Output;

type Reducer<Accumulator, Current> = (acc: Accumulator, cur: Current) => Accumulator;

function map<Input, Output>(fn: MappingFunction<Input, Output>): Reducer<Output[], Input> {
  return (acc, cur) => [...acc, fn(cur)];
}

test("Array.map rewritten with Array.reduce", function () {
  const array: number[] = [0, 1, 2, 3];
  const increment = (n: number): number => n + 1;
  expect(array.reduce(map(increment), [])).toEqual([1, 2, 3, 4]);
});

type FilterFunction<Input> = (input: Input) => boolean;

function filter<Input>(fn: FilterFunction<Input>): Reducer<Input[], Input> {
  return (acc, cur) => {
    if (fn(cur)) {
      return [...acc, cur];
    }
    return acc;
  };
}

test("Array.filter rewritten with Array.reduce", function () {
  const array: number[] = [0, 1, 2, 3];
  const isOdd = (n: number): boolean => n % 2 === 1;
  expect(array.reduce(filter(isOdd), [])).toEqual([1, 3]);
});
