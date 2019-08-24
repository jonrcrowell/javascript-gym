/*
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/

function changeUs(arr, func) {
  const changed = arr.map(x => func(x))
  return changed;
}

function add(x) {
  return x + x;
}

function square(x) {
  return x * x;
}

function triple(x) {
  return x * 3;
}
const start = [1, 2, 3]
console.log(changeUs(start, add))
console.log(changeUs(start, square))
console.log(changeUs(start, triple))
