const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

const appendSlugIfNIsMultipleOf =
  (slug: string) =>
  (multiple: number) =>
  (n: number) =>
  (s: string): string => {
    if (isMultipleOf(multiple, n)) {
      return s + slug;
    }
    return s;
  };

const appendFizzIfNIsMultipleOf3 = appendSlugIfNIsMultipleOf("Fizz")(3);

const appendBuzzIfNIsMultipleOf5 = appendSlugIfNIsMultipleOf("Buzz")(5);

const appendNAsAStringOtherwise =
  (n: number) =>
  (s: string): string => {
    return s || n.toString();
  };

type MappingFunction<U, V> = (u: U) => V;

// Functor: allows to map a non-mappable type
// map(A->B, F(A)) -> F(B)
const IdentityFunctor = <U>(value: U) => ({
  map: <V>(fn: MappingFunction<U, V>) => IdentityFunctor(fn(value)),
  get: () => value,
});

export const replace = (n: number): string => {
  return IdentityFunctor("")
    .map(appendFizzIfNIsMultipleOf3(n))
    .map(appendBuzzIfNIsMultipleOf5(n))
    .map(appendNAsAStringOtherwise(n))
    .get();
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
