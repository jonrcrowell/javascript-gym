const bearPairs = require("../../exercises/random/bearPairs");

/*
In order to prove it's success and gain funding, the wilderness zoo needs to
prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to find all of the mating pairs, 
and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together
in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct
bears each.

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)
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

it(`identifies 3 pairs regardless of male/female order`, () => {
  const threePairs = "B8B8B8yhamster";
  expect(bearPairs(3, threePairs)[1]).toBe(true);
});
