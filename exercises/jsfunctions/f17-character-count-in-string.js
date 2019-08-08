function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-17.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to  get the number of occurrences of each letter in specified string.
    
  */

// even though I know this text has more Fs than I expect, the function
// still helped me figure out the right number
const rawText = `FINISHED FILES ARE THE RESULT 
                  OF YEARS OF SCIENTIFIC STUDY COMBINED 
                  WITH THE EXPERIENCE OF YEARS`;
const allLetters = rawText.split("");
const sortedUniqueLetters = [...new Set(rawText)].sort();

sortedUniqueLetters.map(function(x) {
  console.log(`${x}: ${allLetters.filter(l => l === x).length}`);
});
