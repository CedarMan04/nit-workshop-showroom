const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 6 + 7 to equal 13', () => {
  expect(sum(6, 7)).toBe(13)
})