/*
Test.describe("Example tests",_=>{
Test.assertSimilar(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false]);
Test.assertSimilar(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]); 
Test.assertSimilar(bears(8, '8'), ["",false]); 
*/

const bearString = "i8BBkBdBBBBBc8Bh888B8afhBBf8k8 ";

console.log(bearPairCount(5, bearString));
console.log(bears(4, bearString));

function bearPairCount(count, population) {
  let pairs = "";
  for (let i = 0; i < population.length; i++) {
    if (population[i] === "8" && population[i + 1] === "B") {
      pairs += "8B";
      i++;
    } else if (population[i] === "B" && population[i + 1] === "8") {
      pairs += "B8";
      i++;
    }
  }
  return [pairs, pairs.length / 2 >= count];
}

function bears(x, s) {
  var pairs = s.match(/(8B)|(B8)/g) || []; // dramatically better way to accomplish the task
  return [pairs.join(""), pairs.length >= x];
}

module.exports = bears;
