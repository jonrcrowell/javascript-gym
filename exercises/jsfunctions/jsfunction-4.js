function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-1.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Example string : 'webmaster' 
    Expected Output : 'abeemrstw'
  */

const sortMe = 'chincoteague flamengo'
printThis(sortMe);
const sorted = sortMe.split('').sort().join('')
printThis(sorted);