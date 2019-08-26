/*
Given a string, reverse the order of the words and swap the casing of all letters
"I am a sTring";  // should convert to "StRING A AM i"
"YoLo yo" => "Yo yOlO"
*/
const isUpperCase = string => /^[A-Z]*$/.test(string);
const isLowerCase = string => /^[a-z]*$/.test(string);

const raw = "I am a sTring";
console.log(transformString(raw));

function transformString(string) {
  const sortedWords = string.split(" ").reverse();
  const transformed = [];
  for (var word of sortedWords) {
    transformed.push(changeCaseOfString(word));
  }
  console.log(transformed);
  return transformed.join(" ");
}

function convertCase(x) {
  if (isUpperCase(x)) {
    return x.toLowerCase();
  }
  if (isLowerCase(x)) {
    return x.toUpperCase();
  }
}

function changeCaseOfString(string) {
  let newString = [];
  for (var el of string) {
    newString.push(convertCase(el));
  }
  return newString.join("");
}

// much cleaner way to do this
const stringTransformer = s =>
  s
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(invertCase)
    .join("");
const invertCase = c => (/[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase());
console.log(stringTransformer("I am a 5-Star Hobbit"));
