const isLeapYear = require("../../exercises/jsbasics/j6-isLeapYear");

it(`detects a leap year for a year cleanly divisible by 4`, () => {
  expect(isLeapYear(2004)).toBe(true);
});

it(`knows that years that aren't divisible by 4 aren't leap years`, () => {
  expect(isLeapYear(2001)).toBe(false);
  expect(isLeapYear(2002)).toBe(false);
  expect(isLeapYear(2003)).toBe(false);
  expect(isLeapYear(1697)).toBe(false);
});

it(`knows that years divisible by 100 but not 400 are not leap years`, () => {
  expect(isLeapYear(1700)).toBe(false);
  expect(isLeapYear(1800)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
});

it(`knows that years divisible by both 100 and 400 are leap years`, () => {
  expect(isLeapYear(1600)).toBe(true);
  expect(isLeapYear(2000)).toBe(true);
});
