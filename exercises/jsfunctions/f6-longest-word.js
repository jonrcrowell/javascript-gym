function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-6.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that accepts a string as a parameter and finds 
    the longest word within the string.
    Example string : 'Web Development Tutorial' 
    Expected Output : 'Development'
  */

const input = prompt("Enter a list of words or a sentence. I'll tell you the longest word.")

const getLongestWord = function (str) {
  const words = str.replace(/[^a-z]/gi, ' ').split(' ')  // include 0-9 [^a-z0-9] if I want to allow numbers to be counted
  // gi makes the regex search global and case-insensitive so I don't need to worry about capital letters
  const maxLength = words.map(x => x.length).reduce((x, y) => x > y ? x : y)
  const longestWord = words.filter(x => x.length === maxLength)
  // if we have more than one word of the max length, return all of them
  return longestWord.length === 1 ? longestWord[0] : longestWord
}

console.log(getLongestWord(input));