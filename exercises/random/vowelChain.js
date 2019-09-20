// find the longest chain of consecutive vowels in a string

const string = "Codewarriors";

console.log(vowelChain(string));

function vowelChain(text) {
  return text
    .toLowerCase()
    .split(/[^aeiou]/)
    .reduce((longest, current) => Math.max(longest, current.length), 0);
}
