const bloodAlcoholContent = require("../../exercises/random/bloodAlcoholContent");

it(`calculates blood alcohol content for males`, () => {
  expect(bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, "male", 1)).toBe(
    0.0837
  );
});
it(`calculates blood alcohol content for females`, () => {
  expect(
    bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, "female", 1)
  ).toBe(0.1758);
});
