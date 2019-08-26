const sum = require("./sum");

test("sum 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum 77 + 23 to equal 100", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum -1 + -22 to equal -23", () => {
  expect(sum(1, 2)).toBe(3);
});
