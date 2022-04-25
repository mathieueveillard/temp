// 1 1 + = 2
// 1 1 1 + + = 1 2 + = 3
// 1 1 1 + - = 1 2 - = -1  équivalent à 1 - (1 + 1) = -1
// 1 10 100 + - = 1 110 - = -109
// 1 -1 + = 0
// Operators: binary operators (+, -, *, /), unary operator (NEGATE)
// Operand: numbers
// 1 NEGATE = -1
// 1 1 NEGATE + = 1 -1 + = 0

// rpn(1, 1, "NEGATE", "+") => 0
// Curryfication
// Pure functions (no side cause, no side effect) => immutability (const, spread operator)
