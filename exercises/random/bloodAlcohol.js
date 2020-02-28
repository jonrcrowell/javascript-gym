/*
Test.assertEquals(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1), 0.0837)
Test.assertEquals(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1), 0.1758);
Test.assertEquals(bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3), 0.0601);
Test.assertEquals(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);
*/

const bloodAlcoholContent = (drinks, weight, sex, time) =>
  ((drinks.ounces * drinks.abv * 5.14) / weight) *
    (sex === "male" ? 0.73 : 0.66) -
  0.015 * time;

export default bloodAlcoholContent;
