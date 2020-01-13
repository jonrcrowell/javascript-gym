/*
    We can get the number of formal parameters for a function by examining its length property
*/

function someParams(a, b, c) {
  return a + b + c;
}

console.log(someParams.length); // 3
