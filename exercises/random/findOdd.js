/*
Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

Examples:

oddOne([2,4,6,7,10]) // => 3
oddOne([2,16,98,10,13,78]) // => 4
oddOne([4,-8,98,-12,-7,90,100]) // => 4
oddOne([2,4,6,8]) // => -1
*/

const findMe = [4, -8, 98, -12, 23, 90, 100];

console.log(oddOne(findMe));

function oddOne(numbers) {
  const odd = numbers.filter(x => x % 2 !== 0)[0];
  return numbers.indexOf(odd);
}
