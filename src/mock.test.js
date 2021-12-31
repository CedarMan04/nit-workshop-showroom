function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
test("モック関数テスト", () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([1, 2, 3], mockCallback);
  
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(3);
  
  // The first argument of the first call to the function was 1
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  
  // The first argument of the second call to the function was 2
  expect(mockCallback.mock.calls[1][0]).toBe(2);

    // The first argument of the third call to the function was 3
    expect(mockCallback.mock.calls[2][0]).toBe(3);
  
  // The return value of the first call to the function was 43
  expect(mockCallback.mock.results[0].value).toBe(43);

  // The return value of the second call to the function was 44
  expect(mockCallback.mock.results[1].value).toBe(44);

  // The return value of the third call to the function was 45
  expect(mockCallback.mock.results[2].value).toBe(45);
})
