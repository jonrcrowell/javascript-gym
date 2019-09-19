/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// solve functionally

const list = [];

console.log(countPosSumNeg(list));

function countPosSumNeg(numbers) {
  if (numbers.length === 0) return [];
  return numbers.reduce((prev, curr) => {
    curr > 0 ? prev[0]++ : (prev[1] += curr);
    return prev;
  }, Array(2).fill(0));
}
