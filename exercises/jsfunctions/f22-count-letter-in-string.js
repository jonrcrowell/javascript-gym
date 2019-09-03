// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
    Sample arguments : 'w3resource.com', 'o' 
    Expected output : 2 
*/

const stringContainer = "w3resource.com";
const letterToCount = "o";

const letterArray = stringContainer.split("").filter(x => x === letterToCount);
console.log(letterArray);
const letterCount = letterArray.length;
console.log(letterCount);

// now let me try this using Rauschmayer's map approach
console.log(
  `Get letter count using a map. Count of letter ${letterToCount} in string("${stringContainer}") is ${countCharacters(
    stringContainer,
    letterToCount
  )}.`
);

function countCharacters(characters, letter) {
  const charCounts = new Map();
  for (let character of characters) {
    character = character.toLowerCase();
    const prevCount = charCounts.get(character) || 0;
    charCounts.set(character, prevCount + 1);
  }
  return charCounts.get(letter);
}
