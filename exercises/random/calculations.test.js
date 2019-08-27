const arithmetic = require("./calculations");

test("Yay Math! Let's add some stuff", () => {
  expect(arithmetic(add, 1, 2)).toBe(3);
});

/*
console.log(arithmetic(1, 2, add));
console.log(arithmetic(21, 2, subtract));
console.log(arithmetic(11, 2, multiply));
console.log(arithmetic(34, 2, divide));

*/
