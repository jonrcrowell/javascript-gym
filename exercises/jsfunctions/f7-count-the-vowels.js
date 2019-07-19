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

const input = "The quick brown fox is feeling froggy. Aha!"

const getVowelCount = function (str) {
  const vowels = str.replace(/[^aeiou]/gi, '')
  // gi makes the regex search global and case-insensitive 
  // so I don't need to worry about capital letters
  return vowels.length
}

console.log(getVowelCount(input));