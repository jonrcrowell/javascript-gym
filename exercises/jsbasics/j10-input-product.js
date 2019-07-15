const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-10.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

*/

const numberList = prompt("Enter a comma-separated list of numbers. I will multiply them for you.")
const numbers = numberList.split(',').map(x => parseInt(x))
const product = numbers.reduce((x, y) => x * y)
console.log(numbers)
console.log(product)