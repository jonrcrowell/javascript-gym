function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: isPalindrome");

const forward = 'racecare';
const backward = forward.split('').reverse().join('');

console.log(forward);
console.log(backward);

const isPalindrome = forward === backward;
const palindromeMessage = isPalindrome ?
  "Yes! It is a lovely palindrome indeed!" :
  "Of course not. That should be obvious even without a fancy computer program."
console.log(`Is ${forward} a palindrome? Survey says: ${palindromeMessage}`)