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

const reverseMe = 3227439;
printThis(reverseMe);

function reverseNumber(number) {
  // can I split a number like I can split a string?
  // of course I can, have to convert to string first
  const split = reverseMe.toString().split("");
  console.log(split);
  console.log(split.length);
  let arr = [];
  for (let i = split.length - 1; i > -1; i--) {
    arr.push(split[i]);
  }
  const reversednum = Number.parseInt(arr.join(""));
  console.log(typeof reversednum);
  return reversednum;
}

const reversed = reverseNumber(reverseMe);
printThis(reversed);
