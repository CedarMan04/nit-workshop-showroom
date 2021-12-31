test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test("object assignment part2", () => {
  const num = {ichi: 'one'}
  num['ni'] = "two"
  expect(num).toEqual({ichi: 'one', ni: 'two'})
})