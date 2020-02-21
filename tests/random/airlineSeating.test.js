const airlineSeating = require("../../exercises/random/airlineSeating");

it(`assign premium and standard passengers to the correct seat`, () => {
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
it(`should assign premium passengers to available seats`, () => {
  expect(airlineSeating(["f", "f", "f", "f", "c"], 2, 0)).toStrictEqual([
    "p",
    "p",
    " ",
    " ",
    " "
  ]);
});

it(`should assign standard passengers to fill up coach and then use available first-class seats`, () => {
  expect(airlineSeating(["f", "f", "c"], 0, 2)).toStrictEqual(["s", " ", "s"]);
});
