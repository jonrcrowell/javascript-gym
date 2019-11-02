const text = "Your mother was a hamster";
const letter = "X";

const replaceAllButLetter = (str, replacement) =>
  str.replace(/[^e]/g, replacement);

console.log(replaceAllButLetter(text, letter));
