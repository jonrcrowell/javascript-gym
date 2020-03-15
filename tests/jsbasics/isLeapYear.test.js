const isLeapYear = require("../../exercises/jsbasics/j6-isLeapYear");

it(`detects a leap year for a year cleanly divisible by 4`, () => {
  expect(isLeapYear(2000)).toBe(true);
});
