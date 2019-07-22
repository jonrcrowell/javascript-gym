function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-8.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function which accepts an argument and returns the type.
    Note : There are six possible values that typeof returns: 
        object, boolean, function, number, string, and undefined.
        actually a few new ones as well -- check MDN
  */

const objectInput = {
  firstName: "Willy",
  lastName: "Wonka"
}
const booleanInput = false
const functionInput = function () {
  return "I am awesome!"
}
const numberInput = 42;
const stringInput = "I am a string"
let x;  // declared but not defined
const undefinedInput = x;
const bigIntInput = 42n;
const symbolInput = Symbol.iterator

const argument = bigIntInput

// ---------------------------------------------------------------
const whatIsMyType = function (input) {
  return typeof input;
}

console.log(`${argument} is the following type => `, whatIsMyType(argument))
console.log(typeof symbolInput);