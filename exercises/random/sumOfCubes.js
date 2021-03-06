/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:


sum of the cubes of 1 and 2 is 1 + 8
*/

const result = sumCubes(3); // 9

console.log(result);

function sumCubes(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += Math.pow(i, 3);
  }
  return answer;
}
