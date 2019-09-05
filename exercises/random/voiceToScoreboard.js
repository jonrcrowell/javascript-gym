/*
Test.assertSimilar(scoreboard("The score is four nil"), [4,0], "Should return: [4,0]");
Test.assertSimilar(scoreboard("new score: two three"), [2,3], "Should return: [2,3]");
Test.assertSimilar(scoreboard("two two"), [2,2], "Should return: [2,2]");
Test.assertSimilar(scoreboard("Arsenal just conceded another goal, two nil"), [2,0], "Should return: [2,0]");

*/

console.log(scoreboard("The score is Four nil"));
console.log(scoreboard("new score: two three"));
console.log(scoreboard("two two"));
console.log(scoreboard("Arsenal just conceded another goal, two nil"));

function scoreboard(shout) {
  const scoreLookup = {
    zero: 0,
    nil: 0,
    nothing: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  let score = [];
  const lookupScore = x => {
    const teamscore = scoreLookup[x.toLowerCase()];
    if (typeof teamscore === "number") {
      score.push(teamscore);
    }
  };
  shout.split(" ").map(lookupScore);
  return score;
}
