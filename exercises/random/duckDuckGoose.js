/*
Test.assertEquals(duckDuckGoose(players, 1),  "a");
Test.assertEquals(duckDuckGoose(players, 3),  "c");
Test.assertEquals(duckDuckGoose(players, 10), "z");
Test.assertEquals(duckDuckGoose(players, 20), "z");
Test.assertEquals(duckDuckGoose(players, 30), "z");
Test.assertEquals(duckDuckGoose(players, 18), "g");
Test.assertEquals(duckDuckGoose(players, 28), "g");
Test.assertEquals(duckDuckGoose(players, 12), "b");
Test.assertEquals(duckDuckGoose(players, 2),  "b");
Test.assertEquals(duckDuckGoose(players, 7),  "f");
*/

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map(n => new Player(n));

console.log(duckDuckGoose(players, 10));
console.log(duckDuckGoose(players, 28));

function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;
  return players[index].name;
}
