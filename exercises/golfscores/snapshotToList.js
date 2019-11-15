// what is the best way to format this data to efficiently update all entries scores?
// maybe I should just focus on getting it to work first, then I can worry about performance

// maybe create an object with one entry per player with their current score?
// see Object.fromEntries() below, this will work
const Scores = {
  "Shane Lowry": -15,
  "Tommy Fleetwood": -9,
  "Tony Finau": -9,
  "Rickie Fowler": 5,
  "Tiger Woods": -5,
  "Rory McIlroy": 1,
  "Dustin Johnson": -3
};

// I think I can use Object.fromEntries()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
const entries = new Map([["foo", "bar"], ["baz", 42]]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

const ScoreSnapshot = [
  {
    PlayerName: "Shane Lowry",
    ToPar: "-15",
    CurrentRoundScore: "+1",
    Thru: "F"
  },
  {
    PlayerName: "Tommy Fleetwood",
    ToPar: "-9",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Tony Finau",
    ToPar: "-7",
    CurrentRoundScore: "E",
    Thru: "F"
  },
  {
    PlayerName: "Brooks Koepka",
    ToPar: "-6",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Rickie Fowler",
    ToPar: "-5",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Francesco Molinari",
    ToPar: "-3",
    CurrentRoundScore: "-5",
    Thru: "F"
  },
  {
    PlayerName: "Justin Thomas",
    ToPar: "-3",
    CurrentRoundScore: "+1",
    Thru: "F"
  },
  {
    PlayerName: "Alexander Noren",
    ToPar: "-3",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Jon Rahm",
    ToPar: "-3",
    CurrentRoundScore: "+4",
    Thru: "F"
  },
  {
    PlayerName: "Louis Oosthuizen",
    ToPar: "-1",
    CurrentRoundScore: "-2",
    Thru: "F"
  },
  {
    PlayerName: "Erik van Rooyen",
    ToPar: "-1",
    CurrentRoundScore: "+2",
    Thru: "F"
  },
  {
    PlayerName: "Matthew Fitzpatrick",
    ToPar: "-1",
    CurrentRoundScore: "+2",
    Thru: "F"
  },
  {
    PlayerName: "Henrik Stenson",
    ToPar: "-1",
    CurrentRoundScore: "+5",
    Thru: "F"
  },
  {
    PlayerName: "Jordan Spieth",
    ToPar: "-1",
    CurrentRoundScore: "+6",
    Thru: "F"
  },
  {
    PlayerName: "Justin Rose",
    ToPar: "-1",
    CurrentRoundScore: "+8",
    Thru: "F"
  },
  {
    PlayerName: "Webb Simpson",
    ToPar: "E",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Bernd Wiesberger",
    ToPar: "+1",
    CurrentRoundScore: "-1",
    Thru: "F"
  },
  {
    PlayerName: "Benjamin Hebert",
    ToPar: "+2",
    CurrentRoundScore: "E",
    Thru: "F"
  },
  {
    PlayerName: "Aaron Wise",
    ToPar: "+2",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Patrick Cantlay",
    ToPar: "+2",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Xander Schauffele",
    ToPar: "+2",
    CurrentRoundScore: "+7",
    Thru: "F"
  },
  {
    PlayerName: "Matt Kuchar",
    ToPar: "+2",
    CurrentRoundScore: "+8",
    Thru: "F"
  },
  {
    PlayerName: "Matt Wallace",
    ToPar: "+3",
    CurrentRoundScore: "+1",
    Thru: "F"
  },
  {
    PlayerName: "Charley Hoffman",
    ToPar: "+3",
    CurrentRoundScore: "+3",
    Thru: "F"
  },
  {
    PlayerName: "Dustin Johnson",
    ToPar: "+3",
    CurrentRoundScore: "+5",
    Thru: "F"
  },
  {
    PlayerName: "Thorbjorn Olesen",
    ToPar: "+4",
    CurrentRoundScore: "E",
    Thru: "F"
  },
  {
    PlayerName: "Paul Casey",
    ToPar: "+4",
    CurrentRoundScore: "+2",
    Thru: "F"
  },
  {
    PlayerName: "Adam Hadwin",
    ToPar: "+4",
    CurrentRoundScore: "+2",
    Thru: "F"
  },
  {
    PlayerName: "Graeme McDowell",
    ToPar: "+4",
    CurrentRoundScore: "+6",
    Thru: "F"
  },
  {
    PlayerName: "Andrew Johnston",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Rory McIlroy",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Jason Day",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Hideki Matsuyama",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Gary Woodland",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Chez Reavie",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Padraig Harrington",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Bryson DeChambeau",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Rafael Cabrera Bello",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Tiger Woods",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Marc Leishman",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Phil Mickelson",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  },
  {
    PlayerName: "Adam Scott",
    ToPar: "CUT",
    CurrentRoundScore: "-",
    Thru: "CUT"
  }
];

const list = [];
ScoreSnapshot.forEach(x => {
  return list.push([x.PlayerName, x.ToPar]);
});

const JustScores = Object.fromEntries(new Map(list));

console.log(JustScores);
console.log(JustScores["Paul Casey"]);
