function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-14.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to convert an amount to coins.
    Here 46 is the amount to convert.
    Output : 25, 10, 10, 1
  */

const amount = 23
const coins = [25, 10, 5, 2, 1];  // not sure what this so-called 2 cent coin is
console.log(convertToCoins(amount))

function convertToCoins(amount) {
  let coinList = [];
  let remainder = amount;

  coins.forEach(c => calculateCoins(c))

  function calculateCoins(cents) {
    while (remainder >= cents) {  // -- condition
      coinList.push(cents)        // -- body
      remainder -= cents          // -- updater
    }
  }
  return coinList
}

