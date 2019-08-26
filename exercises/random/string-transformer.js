/*
Given a string, reverse the order of the words and swap the casing of all letters
"I am a sTring";  // should convert to "StRING A AM i"
"YoLo yo" => "Yo yOlO"
*/

function stringTransformer(str) {
  const sortedWords = str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(invertCase)
    .join("");
  return sortedWords;
}

const invertCase = c => (/[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase());
console.log(stringTransformer("I am a 5-Star Hobbit"));
console.log(stringTransformer("I am a sTring"));
console.log(stringTransformer("YoLo yo"));
