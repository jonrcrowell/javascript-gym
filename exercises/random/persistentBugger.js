/*
Write a function, persistence, that takes in a positive parameter num 
and returns its multiplicative persistence, which is the number of 
times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                          and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                           1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

console.log("TCL: recursivePersistence(999)", recursivePersistence(999));
console.log("TCL: persistence(999)", persistence(999));

function persistence(number) {
  let times = 0;
  while (number > 9) {
    number = number
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) * parseInt(b));
    times++;
  }
  return times;
}

function recursivePersistence(number, times = 0) {
  // use default parameter
  // base case
  if (number < 10) return times;

  number = number
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) * parseInt(b));

  // recursion case
  return recursivePersistence(number, times + 1);
}
