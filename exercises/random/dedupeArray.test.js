const dedupeArray = require("./dedupeArray");

test("eliminates duplicate values", () => {
  expect(dedupeArray([1, 1, 1, 1, 2, 3, 4, 4, 4])).toEqual([1, 2, 3, 4]);
});
test("preserves non-duplicate values", () => {
  expect(dedupeArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
test("eliminates duplicate values", () => {
  expect(dedupeArray([1, 1, 1, 1, -25, 3, -25, 4, 4])).toEqual([1, -25, 3, 4]);
});
