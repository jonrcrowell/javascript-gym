function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-11.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
    
    Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4 
  */

const myArray = [1, 2, 3, 4, 1, 5, 17, 77]

console.log(myArray)
console.log(secondBiggest(myArray))
console.log(secondSmallest(myArray))

function secondBiggest(arr) {
  const biggest = Math.max(...arr)
  // the spread operator works great for small arrays
  // it isn't as fast as a standard loop but much cleaner syntax
  // use this unless performance becomes a problem (i.e. arrays with tens of thousands of items)
  // http://stackoverflow.com/a/30834687
  // https://stackoverflow.com/a/30834687/138938
  const lobotomized = arr.filter(x => x !== biggest)
  return Math.max(...lobotomized)
}

function secondSmallest(arr) {
  const smallest = Math.min(...arr)
  const footless = arr.filter(x => x !== smallest)
  return Math.min(...footless)
}
