const { add, subtract, multiply, divide } = require('./calculator');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 = 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

test('divides 8 / 2 = 4', () => {
  expect(divide(8, 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

test('modulus 10 % 3 = 1', () => {
  expect(modulus(10, 3)).toBe(1);
});

