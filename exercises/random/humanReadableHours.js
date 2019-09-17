/*
Your task in order to complete this Kata is to write a function which 
formats a working hours schedule, given as an array of objects, in a human-friendly way.

The function must accept an unsorted array. 
If the array is empty, it just returns an empty array. 
Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

The output format for one day should be SUN: 11:00 - 23:00.

If two or more days of the week in a row have the same working hours 
they should be concatenated and have the following format: MON - WED: 11:00 - 23:00.

It is much easier to understand with an example:

** Input **
data array

** Output **

MON - WED: 11:00 - 23:00
THU - FRI: 12:00 - 23:00
SAT: 10:00 - 23:00
SUN: 11:00 - 23:00
*/
const data = [
  { day: "mon", from: "11:00", to: "23:00" },
  { day: "tue", from: "11:00", to: "22:00" },
  { day: "wed", from: "11:00", to: "23:00" },
  { day: "thu", from: "12:00", to: "22:00" },
  { day: "fri", from: "12:00", to: "23:00" },
  { day: "sat", from: "10:00", to: "22:00" },
  { day: "sun", from: "11:00", to: "23:00" }
];

console.log(printSchedule(data));

function printSchedule(daily) {
  const schedule = [
    { 1: null },
    { 2: null },
    { 3: null },
    { 4: null },
    { 5: null },
    { 6: null },
    { 7: null }
  ];
  daily.map(x => {
    if (x.day === "mon") schedule[1] = x;
    if (x.day === "tue") schedule[2] = x;
    if (x.day === "wed") schedule[3] = x;
    if (x.day === "thu") schedule[4] = x;
    if (x.day === "fri") schedule[5] = x;
    if (x.day === "sat") schedule[6] = x;
    if (x.day === "sun") schedule[7] = x;
  });

  let progress = 1;
  let first = schedule[progress];
  let last = schedule[progress + 1];
  let days = "";
  let printOut = "";

  while (progress < 7) {
    let hours = first.from + " - " + first.to;

    if (first.from === last.from && first.to === last.to) {
      days = first.day.toUpperCase() + " - " + last.day.toUpperCase();
    } else {
      if (!days) {
        days = first.day.toUpperCase();
      }
      printOut = printOut
        ? printOut + `\r\n${days}: ${hours}`
        : `${days}: ${hours}`;
      first = last;
      days = "";
    }
    if (last === schedule[7]) {
      if (!days) {
        days = first.day.toUpperCase();
        hours = last.from + " - " + last.to;
      }
      printOut = printOut
        ? printOut + `\r\n${days}: ${hours}`
        : `${days}: ${hours}`;
    }
    progress++;
    last = schedule[progress + 1];
  }

  return printOut;
}
