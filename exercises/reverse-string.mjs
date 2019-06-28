function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: reverse-string.mjs");

const reverseMe = "shazbat";
printThis(reverseMe);
const splitWord = reverseMe.split("");
console.log(splitWord);
let reversed = [];
for (let i = splitWord.length - 1; i > -1; i--) {
  reversed.push(splitWord[i]);
}
console.log(reversed);
const reversedWord = reversed.join("");
printThis(reversedWord);
