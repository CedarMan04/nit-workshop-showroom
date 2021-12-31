test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("マイナス値の可算が正の整数にならない事", () => {
  for(let a = -1; a > -10; a--){
    for(let b = -1; b > -10; b--){
      expect(a + b).not.toBeGreaterThan(0)
    }
  }
})