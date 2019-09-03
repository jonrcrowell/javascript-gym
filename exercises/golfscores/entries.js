const scores = require("./scores");

const entry1 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry2 = {
  "Phil Mickelson": scores["Phil Mickelson"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Tony Romo": scores["Tony Romo"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry3 = {
  "Tony Romo": scores["Tony Romo"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Phil Mickelson": scores["Phil Mickelson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry4 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative,
  Total: 0,
  "Made Cut": true
};
const entry5 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
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

function calcEntryScore(entry) {
  let scores = [];
  console.log("-------------");
  for (const key of Object.keys(entry)) {
    if (typeof entry[key] === "number") {
      scores.push(entry[key]);
    }
  }
  if (scores.length < 4) {
    // hack for now because total is numeric as well as players scores
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
