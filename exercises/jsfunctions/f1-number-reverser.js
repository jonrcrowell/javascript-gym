function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-1.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output : 34223
  
  */

const reverseMe = 3227439234582344;
printThis("We are going to try to reverse the following number: ")
printThis(reverseMe)
printThis("Check our work below...")
const reversed = reverseMe.toString().split('').reverse().join('');
printThis(reversed);