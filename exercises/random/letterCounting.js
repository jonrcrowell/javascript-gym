/*
Take a string str and return a string that is made up of the number of 
occurances of each english letter in str, followed by that letter. 
The string shouldn't contain zeros; leave them out.

An empty string, or one with no letters, should return an empty string.

Ignore all case.

str will never be null.

For Example:

Kata.StringLetterCount("This is a test sentence.") == "1a1c4e1h2i2n4s4t"
Kata.StringLetterCount("") == ""
Kata.StringLetterCount("555") == ""
*/

const countMe = "555";

console.log(stringLetterCount(countMe));

function stringLetterCount(string) {
  const letters = string
    .replace(/[^a-z]/gi, "") // keep only letters
    .toLowerCase()
    .split("")
    .sort();

  // object to count occurrences
  const counts = {};
  const incrementLetterCount = x => (counts[x] = counts[x] ? counts[x] + 1 : 1); // point free
  letters.map(incrementLetterCount);

  // map over object to create return value
  let counted = [];
  for (const key of Object.keys(counts)) {
    counted.push(counts[key]);
    counted.push(key);
  }
  // return
  return counted.join("");
}
