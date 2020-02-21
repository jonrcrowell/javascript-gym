const accum = require("../../exercises/random/accum");

it(`adds each letter in string and increments the number of times the next letter repeats`, () => {
  expect(accum("abcd")).toBe("A-Bb-Ccc-Dddd");
  expect(accum("RqaEzty")).toBe("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
  expect(accum("cwAt")).toBe("C-Ww-Aaa-Tttt");
});
