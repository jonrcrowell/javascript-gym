/*
Stack Overflow had some interesting ideas but the best I found was here:
https://gomakethings.com/sorting-an-array-by-multiple-criteria-with-vanilla-javascript/

Good explanation of how the multi-criteria sort works
*/

const names = [
  { firstName: "Jon", lastName: "Crowell" },
  { firstName: "Jon", lastName: "Hamilton" },
  { firstName: "Alexander", lastName: "Hamilton" },
  { firstName: "Lisa", lastName: "Crowell" },
  { firstName: "Linda", lastName: "Crowell" },
  { firstName: "Gabi", lastName: "Crowell" },
  { firstName: "Savvy", lastName: "Crowell" },
  { firstName: "Lola", lastName: "Crowell" }
];

const sortBySingleCriteria = [...names].sort(function(name1, name2) {
  // Sort by lastName
  if (name1.lastName > name2.lastName) return 1;
  if (name1.lastName < name2.lastName) return -1;
});

console.log(sortBySingleCriteria);

const sortByMultipleCriteria = [...names].sort(function(name1, name2) {
  // Sort by lastName
  if (name1.lastName > name2.lastName) return 1;
  if (name1.lastName < name2.lastName) return -1;

  //  If last names are the same, no sorting will occur
  //  and we can sort by additional criteria
  if (name1.firstName > name2.firstName) return 1;
  if (name1.firstName < name2.firstName) return -1;
});

console.log(sortByMultipleCriteria);

// and another example for good measure
// let's sort a list of golfers' scores
const golfPicks = [
  {
    player1: "Rory",
    player1Score: -7,
    player2: "Tiger",
    player2Score: -11,
    player3: "Justin",
    player3Score: -5
  },
  {
    player1: "Tiger",
    player1Score: -11,
    player2: "Phil",
    player2Score: 4,
    player3: "Ben",
    player3Score: -3
  },
  {
    player1: "Rahm",
    player1Score: -3,
    player2: "Dustin",
    player2Score: -2,
    player3: "Billy",
    player3Score: 0
  },
  {
    player1: "Rory",
    player1Score: -7,
    player2: "Sascha",
    player2Score: -10,
    player3: "George",
    player3Score: 9
  },
  {
    player1: "Rory",
    player1Score: -7,
    player2: "Tiger",
    player2Score: -11,
    player3: "Fred",
    player3Score: -7
  }
];

console.log(golfPicks);

const sortGolfersByPlayer1Score = [...golfPicks].sort(function(pick1, pick2) {
  // sort by player1 score
  if (pick1.player1Score > pick2.player1Score) return 1;
  if (pick1.player1Score < pick2.player1Score) return -1;
});

console.log(sortGolfersByPlayer1Score);

// now let's sort by all 3 scores
const sortGolfersByAllScores = [...golfPicks].sort(function(pick1, pick2) {
  // sort by player1 score
  if (pick1.player1Score > pick2.player1Score) return 1;
  if (pick1.player1Score < pick2.player1Score) return -1;

  // sort by player2 score
  if (pick1.player2Score > pick2.player2Score) return 1;
  if (pick1.player2Score < pick2.player2Score) return -1;

  // sort by player3 score
  if (pick1.player3Score > pick2.player3Score) return 1;
  if (pick1.player3Score < pick2.player3Score) return -1;
});

console.log(sortGolfersByAllScores);
