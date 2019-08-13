// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that generates a string id (specified length) of random characters.
    Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+|}{":?><,./""
*/

const stringLength = 17;
const characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+|}{:?><,./"
let randomString = [];

function getRandomInt(number) {
  return Math.floor(Math.random() * number)
}

for (let i = 0; i < stringLength; i++) {
  const charIndex = getRandomInt(characterList.length)
  randomString.push(characterList[charIndex])
}

console.log(randomString.join(''))

// how the random index generator works
// get a random number between 0 and the length of the available characters
console.log(Math.random() * characterList.length)

// get the integer portion of the random number to use as our index
console.log(Math.floor(Math.random() * characterList.length))