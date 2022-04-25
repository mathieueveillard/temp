const toPower = (power: number, n: number): number => {
  // todo
};

// Application partielle

type Arity2Function<First, Second, Return> = (arg1: First, arg2: Second) => Return;

const partial =
  // (fn, arg1) => (arg2) => fn(arg1, arg2)

    <First, Second, Return>(fn: Arity2Function<First, Second, Return>, arg1: First) =>
    (arg2: Second): Return =>
      fn(arg1, arg2);

const toPower2 = partial(toPower, 2);
