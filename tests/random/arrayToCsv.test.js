const toCsvText = require("../../exercises/random/arrayToCsv");

const convertMe = [
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
];

const convertMe2 = [[1, 2, 3, 5], [7, "homer", "simpson"]];

it(`converts an array to a comma-separated string`, () => {
  expect(toCsvText([[0, 1, 2, 3]])).toBe("0,1,2,3");
});

it(`converts an array of arrays into a comma-separated string`, () => {
  expect(toCsvText(convertMe)).toBe(
    "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
  );
  expect(toCsvText(convertMe2)).toBe("1,2,3,5\n7,homer,simpson");
});
