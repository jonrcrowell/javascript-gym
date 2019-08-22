/*
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that returns the longest palindrome in a given string.
    "I love bananas. I really do."
    "racecar"
*/

const hiddenPalindrome = "I love bananas. I really do.";
console.log(getLongestPalindrome(hiddenPalindrome));

function getLongestPalindrome(str) {
  let foundPalindrome = false;
  let longestPalindrome = "";

  for (let testLength = str.length; testLength > 1 && !foundPalindrome; testLength--) {
    for (let i = 0; i + testLength <= str.length && !foundPalindrome; i++) {
      const testString = str.substring(i, i + testLength);
      if (isPalindrome(testString)) {
        longestPalindrome = testString;
        foundPalindrome = true;
      }
    }
  }
  return longestPalindrome;
}

function isPalindrome(str) {
  const forward = str;
  const backward = str.split('').reverse().join('');
  return forward === backward;
}
