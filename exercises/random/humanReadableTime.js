/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

const parseMe = 0;

console.log(humanReadable(parseMe));

function humanReadable(seconds) {
  const increments = {
    hour: 3600,
    minute: 60,
    second: 1
  };
  const raw = [];

  for (const increment in increments) {
    if (seconds >= increments[increment]) {
      raw.push(Math.floor(seconds / increments[increment]));
      seconds = seconds % increments[increment];
    } else {
      raw.push(0);
    }
  }

  return raw.map(x => x.toString().padStart(2, "0")).join(":");
}
