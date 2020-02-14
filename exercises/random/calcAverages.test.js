const calcAverages = require("./calcAverage");

it(`calculates the average of an array of numbers`, () => {
  expect(calcAverages([100, 50])).toEqual(75);
});

it(`rounds down to the nearest integer`, () => {
  console.log(calcAverages([100, 99]));
  expect(calcAverages([100, 99])).toBeCloseTo(99);
});
