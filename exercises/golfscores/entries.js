const scores = require("./scores");

const entry1 = {
  Name: "Crowell #1",
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry2 = {
  Name: "Crowell #2",
  "Phil Mickelson": scores["Phil Mickelson"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Tony Romo": scores["Tony Romo"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry3 = {
  Name: "Stein #1",
  "Tony Romo": scores["Tony Romo"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Phil Mickelson": scores["Phil Mickelson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry4 = {
  Name: "Park #1",
  "Fred Funk": scores["Fred Funk"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Tony Romo": scores["Tony Romo"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry5 = {
  Name: "Nicholson #17",
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Freddy Couples": scores["Freddy Couples"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};

calcEntryScore(entry1);
calcEntryScore(entry2);
calcEntryScore(entry3);
calcEntryScore(entry4);
calcEntryScore(entry5);
const entries = [entry1, entry2, entry3, entry4, entry5];
const missedCut = entries.filter(x => x.Total === "MC");
const madeCut = entries.filter(x => x.Total !== "MC");
const sorted = [...madeCut.sort((a, b) => a.Total - b.Total), ...missedCut];
console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);
sorted.map(x => console.log(`${x.Name}:  Score: ${x.Total}`));

function calcEntryScore(entry) {
  let scores = [];
  console.log("-------------");
  for (const key of Object.keys(entry)) {
    if (typeof entry[key] === "number") {
      scores.push(entry[key]);
    }
  }
  if (scores.length < 4) {
    // TODO: hack for now because total is numeric as well as players scores
    // probably need to change player1 through player5 into objects within each entry
    entry["Total"] = "MC";
    entry["Made Cut"] = false;
  } else {
    scores.sort((a, b) => a - b);
    entry["Total"] = scores[0] + scores[1] + scores[2];
  }

  for (const key of Object.keys(entry)) {
    console.log(key, entry[key]);
  }
}
