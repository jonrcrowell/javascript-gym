const bloodAlcoholContent = require("../../exercises/random/bloodAlcohol");

/*
Test.assertEquals(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);
*/

it(`calculates blood alcohol content for males`, () => {
  expect(
    bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, "male", 1)
  ).toBeCloseTo(0.0837);
  expect(
    bloodAlcoholContent({ ounces: 50, abv: 0.14 }, 250, "male", 3)
  ).toBeCloseTo(0.0601);
});
it(`calculates blood alcohol content for females`, () => {
  expect(
    bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, "female", 1)
  ).toBeCloseTo(0.1758);
  expect(
    bloodAlcoholContent({ ounces: 20, abv: 0.4 }, 100, "female", 2)
  ).toBeCloseTo(0.2414);
});
