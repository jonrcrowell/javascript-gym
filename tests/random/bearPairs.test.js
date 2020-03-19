const bearPairs = require("../../exercises/random/bearPairs");

/*
Test.describe("Example tests",_=>{
Test.assertSimilar(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false]);
Test.assertSimilar(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]); 
Test.assertSimilar(bears(8, '8'), ["",false]); 
*/

it(`returns false when 4 pairs are expected from a population with 3 bears`, () => {
  const threePairs = "8B8B8B";
  expect(bearPairs(4, threePairs)[1]).toBe(false);
});

it(`returns true when 3 pairs are expected from a population with 3 bears`, () => {
  const threePairs = "8B8B8B";
  expect(bearPairs(3, threePairs)[1]).toBe(true);
});
