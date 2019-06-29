function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsbasic-5.js");

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to rotate the string 'w3resource'
  in right direction by periodically removing one letter from
  the end of the string and attaching it to the front

*/

const forward = 'racecare';
const backward = forward.split('').reverse().join('');

console.log(forward);
console.log(backward);

const isPalindrome = forward === backward;
const palindromeMessage = isPalindrome ?
  "Yes! It is a lovely palindrome indeed!" :
  "Of course not. That should be obvious even without a fancy computer program."
console.log(`Is ${forward} a palindrome? Survey says: ${palindromeMessage}`)