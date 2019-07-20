function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-7.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that accepts a string as a parameter and 
    counts the number of vowels within the string.
    Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
    Example string : 'The quick brown fox' 
    Expected Output : 5
  */

const input = "The quick brown fox"

const getVowelCount = function (str) {
  const vowels = str.replace(/[^aeiou]/gi, '')
  // gi makes the regex search global and case-insensitive 
  // so I don't need to worry about capital letters
  return vowels.length
}

const getConsonantCount = function (str) {
  const consonants = str.replace(/[aeiou ]/gi, '')
  // remove hat to match instead of ignore, add space
  return consonants.length
}

const getSpaceCount = function (str) {
  const spaces = str.replace(/[^ ]/gi, '')
  return spaces.length
}

console.log("Number of vowels :", getVowelCount(input));
console.log("Number of consonants :", getConsonantCount(input))
console.log("Number of spaces :", getSpaceCount(input))