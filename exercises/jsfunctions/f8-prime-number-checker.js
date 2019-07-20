function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-8.js");

/* 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function that accepts a number as a parameter 
    and check the number is prime or not. Go to the editor
    Note : A prime number (or a prime) is a natural number greater 
    than 1 that has no positive divisors other than 1 and itself.
  */

const input = 773

console.log(`Is ${input} a prime number?`)
const primeMessage = `Yes, ${input} is a prime number.`
const notPrimeMessage = `No, ${input} is not prime.`

isPrimeNumber(input) ? console.log(primeMessage) : console.log(notPrimeMessage)

function isPrimeNumber(number) {
  // try to divide the number using 2 through half of the number
  for (let i = 2; i < (number / 2); i++) {
    if (number % i === 0) return false;
  }
  // if any of the results don't have a remainder, the number is not prime

  return true;
}