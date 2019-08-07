function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-15.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. 
    Accept b and n from the user and display the result.
  */

const input = prompt(`What do you want me to calculate? Enter whole numbers separated by a comma for b (base), n (exponent).`)

const base = input.split(',')[0]
const exponent = input.split(',')[1]

console.log(base)
console.log(exponent)
console.log(Math.pow(base, exponent))

// and without using Math.pow
console.log(base ** exponent)