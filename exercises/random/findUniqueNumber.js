/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. 
The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. T
he array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
Example Input:

[ 1, 8, 4, 4, 6, 1, 8 ]

Expected output: 6
*/

// sort first, then loop, pretty sure this isn't fast. Review the other answers to compare once I finish. Should learn something here.
console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));
function findUnique(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  let found = false;
  let unique;
  for (let i = 0; i <= sorted.length && !found; i += 2) {
    if (sorted[i] !== sorted[i + 1]) {
      found = true;
      unique = sorted[i];
    }
  }
  return unique;
}
