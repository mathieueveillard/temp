let wealth = 0;
function spareMoney(wealth: number, amount: number): number {
  return wealth + amount;
}
spareMoney(wealth, 1000);

// Pure = no side cause (scope, XHR, randomness, time) + no side effect (scope, XHR, logging)
