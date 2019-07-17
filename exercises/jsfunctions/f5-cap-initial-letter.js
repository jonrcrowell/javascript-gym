function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-5.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that accepts a string as a parameter 
    and converts the first letter of each word of the string in upper case.
    Example string : 'the quick brown fox' 
    Expected Output : 'The Quick Brown Fox '
  */

const capMe = 'the quick brown fox jumped over the lazy dog'
printThis(capMe);
const initialCapped = capMe.split(' ').map(x => setInitialCap(x)).join(' ')
printThis(initialCapped);

function setInitialCap(str) {
  const fixed = str[0].toUpperCase() + str.substring(1)
  return fixed;
}

console.log(setInitialCap('chicken'))