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

// TODO: don't count punctuation
const getLongestWord = function (str) {
  const words = str.split(' ')
  const longest = words.map(x => x.length).reduce((x, y) => x > y ? x : y)
  const longestWord = words.filter(x => x.length === longest)
  // if we have more than one word of the max length, return all of them
  return longestWord.length === 1 ? longestWord[0] : longestWord
}

console.log(getLongestWord(input));