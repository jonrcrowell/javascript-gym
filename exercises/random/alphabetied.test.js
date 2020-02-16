const alphabetized = require("./alphabetized");

it(`should sort the letters in a string in alpha order without changing case`, () => {
  expect(alphabetized("Bar")).toBe("aBr");
  expect(alphabetized("bAR")).toBe("AbR");
  expect(alphabetized("ChickEn Soup for the Soul")).toBe(
    "cCEefhhiklnoooprSStuu"
  );
  expect(alphabetized("The Holy Bible_-,()@*&#%`^+=$'")).toBe("bBeehHilloTy");
});

// ChickenSoupfortheSoul
// Ccee   hiknSoupforthSoul
// Cceefhhi   knSouportSoul
// CceefhhiklnoooprSStuu  SutSu
// cCeefhhiklnoooprSStuu
