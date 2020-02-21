const airlineSeating = require("../../exercises/random/airlineSeating");

it(`should have a valid test`, () => {
  expect(airlineSeating(["f", "f", "f", "c", "c", "c"], 2, 5)).toStrictEqual([
    "p",
    "p",
    "s",
    "s",
    "s",
    "s"
  ]);
  expect(airlineSeating(["f", "f", "f", "c", "c"], 1, 1)).toStrictEqual([
    "p",
    " ",
    " ",
    "s",
    " "
  ]);
});
