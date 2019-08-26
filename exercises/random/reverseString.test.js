const reverseString = require("./reverse-string");

test("reverse string 'shazbat' to equal 'tabzahs'", () => {
  expect(reverseString("shazbat")).toBe("tabzahs");
});

test("reverse string 'shazbat' to equal 'tabzahs'", () => {
  expect(reverseString("chicken")).toBe("nekcihc");
});

test("reverse string 'shazbat' to equal 'tabzahs'", () => {
  expect(reverseString("bullfrog")).toBe("gorfllub");
});

test("reverse string 'shazbat' to equal 'tabzahs'", () => {
  expect(reverseString("racecar")).toBe("racecar");
});
