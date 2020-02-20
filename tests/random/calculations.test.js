const arithmetic = require("../../exercises/random/calculations");

test("Yay Math! Let's add some stuff", () => {
  expect(arithmetic(1, 2, "+")).toBe(3);
  expect(arithmetic(21, 2, "-")).toBe(19);
  expect(arithmetic(11, 2, "*")).toBe(22);
  expect(arithmetic(34, 2, "/")).toBe(17);
  expect(arithmetic(5, 5, "wussup")).toBe(
    "Invalid operator. Please try again with +, -, *, or /."
  );
});
