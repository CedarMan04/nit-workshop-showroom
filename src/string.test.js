test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('単語に「ァーンヴ」があること', () => {
  expect('ヴァンパイアー').toMatch(/[ァーンヴ]/);
});