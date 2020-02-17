const alphabetized = require("./alphabetized");

it(`should sort the letters in a string in alpha order without changing case`, () => {
  expect(alphabetized("Bar")).toBe("aBr");
  expect(alphabetized("bAR")).toBe("AbR");
  expect(alphabetized("Baby")).toBe("aBby");
  expect(alphabetized("bABY")).toBe("AbBY");
  expect(alphabetized("Chicken Soup for thE Soul")).toBe(
    "CceEfhhiklnoooprSStuu"
  );
  expect(alphabetized("The Holy Bible_-,()@*&#%`^+=$'")).toBe("BbeehHilloTy");
  expect(alphabetized("CccCCCcccedDDdd")).toBe("CccCCCcccdDDdde");
});

// Sort should treat letters the same regardless of case and honor original position in string
// Baby should return aBby, with the capital B first
// bABY should return AbBY, with the lower B first
