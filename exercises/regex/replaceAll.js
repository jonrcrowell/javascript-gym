// basic regex to replace all instances of a character with another

const inputString =
  "Your mother was a hamster and your father smelt of elderberries. How Now Brown Cow?";

function replaceSomething(string) {
  const copy = string;
  return copy.replace(/o/, "||");
}

console.log(replaceSomething(inputString));
// Y||ur mother was a hamster and your father smelt of elderberries. How Now Brown Cow?
// Only the first instance was replaced! What if we want all of them replaced?
// Easy, add the "g" switch

function replaceAll(string) {
  const copy = string;
  return copy.replace(/o/g, "||");
}

console.log(replaceAll(inputString));
