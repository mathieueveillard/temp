// atm(270); // 1 x 200€ bill, 1 x 50€ bill and 1 x 20€ bill

// type Bill = 10;

const ALL_BILLS = [10, 20] as const;

type Bill = typeof ALL_BILLS[number];

type Withdrawal = Partial<Record<Bill, number>>;

interface WithdrawalAccumulator {
  withdrawal: Withdrawal;
  remainingAmount: number;
}

const atm =
  (availableBills: Bill[]) =>
  (amount: number): Withdrawal => {
    const initialAccumulator: WithdrawalAccumulator = {
      withdrawal: {},
      remainingAmount: amount,
    };

    const { withdrawal } = availableBills.reduce<WithdrawalAccumulator>((acc, bill) => {
      const remainingAmount = acc.remainingAmount % bill;
      const numberOfBills = (acc.remainingAmount - remainingAmount) / bill;
      return {
        withdrawal: {
          ...acc.withdrawal,
          [bill]: numberOfBills,
        },
        remainingAmount,
      };
    }, initialAccumulator);

    return withdrawal;
  };

test("Withdraw one bill", function () {
  const availableBills: Bill[] = [10];
  expect(atm(availableBills)(10)).toEqual({
    10: 1,
  });
});

test("Withdraw one bill", function () {
  const availableBills: Bill[] = [20];
  expect(atm(availableBills)(20)).toEqual({
    20: 1,
  });
});

test("Withdraw many times the same bill", function () {
  const availableBills: Bill[] = [10];
  expect(atm(availableBills)(20)).toEqual({
    10: 2,
  });
});

test("Withdraw many different bills", function () {
  const availableBills: Bill[] = [20, 10];
  expect(atm(availableBills)(30)).toEqual({
    10: 1,
    20: 1,
  });
});

// Todo: bills have to be sorted properly

test("map, filter and reduce combined", function () {
  const increment = (i) => i + 1;
  const isEven = (i) => i % 2 === 0;
  const sum = (acc, cur) => acc + cur;

  const actual = [0, 1, 2, 3]
    .map(increment) //
    .filter(isEven)
    .reduce(sum, 0);

  expect(actual).toEqual(6);
});
