const golfers = [
  { name: "Tiger", country: "USA", day1: -4, day2: 3, day3: 2, day4: -5 },
  { name: "Jason", country: "Australia", day1: -4, day2: 3, day3: 2, day4: -5 },
  {
    name: "Rory",
    country: "Northern Ireland",
    day1: -4,
    day2: 3,
    day3: 2,
    day4: -5
  },
  { name: "Vijay", country: "Fiji", day1: -4, day2: 3, day3: "MC", day4: "MC" }
];

// modify the existing array, add a property to each object
golfers.forEach(x => {
  x.lastname = "TBD";
});

// map over array and create a new one with a new property
const enrichedGolfers = golfers.map(x => ({
  ...x,
  made_cut: x.day3 !== "MC",
  total: x.day1 + x.day2 + x.day3 + x.day4
}));

console.log(golfers);
console.log(enrichedGolfers);
console.log("yo");

const scores = {};
const addPlayer = "Bobby McGee";
const addScore = 8;
scores["Tiger Woods"] = -7;
scores[addPlayer] = addScore;
console.log(scores);
