const scores = require("./scores");

const entry1 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative
};
const entry2 = {
  "Phil Mickelson": scores["Phil Mickelson"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Tony Romo": scores["Tony Romo"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative
};
const entry3 = {
  "Tony Romo": scores["Tony Romo"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Phil Mickelson": scores["Phil Mickelson"].relative
};
const entry4 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative
};
const entry5 = {
  "Tiger Woods": scores["Tiger Woods"].relative,
  "Rory McIlroy": scores["Rory McIlroy"].relative,
  "Ernie Els": scores["Ernie Els"].relative,
  "Jon Rahm": scores["Jon Rahm"].relative,
  "Dustin Johnson": scores["Dustin Johnson"].relative
};

calcEntryScore(entry1);
calcEntryScore(entry2);
calcEntryScore(entry3);
calcEntryScore(entry4);
calcEntryScore(entry5);

function calcEntryScore(entry) {
  let total = 0;
  let scores = [];
  for (const key of Object.keys(entry)) {
    console.log(key, entry[key]);
    scores.push(entry[key]);
  }
  scores.sort((a, b) => a - b);
  total = scores[0] + scores[1] + scores[2];

  console.log(total);
}
