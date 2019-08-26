/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

const oddHidingPlace = [
  20,
  1,
  -1,
  2,
  -2,
  3,
  3,
  5,
  5,
  1,
  2,
  4,
  20,
  4,
  -1,
  -2,
  5
];
const theOddOne = getTheOddOne(oddHidingPlace);

console.log(theOddOne);
console.log(findOddXor(oddHidingPlace));

function getTheOddOne(arr) {
  let foundIt = false;
  let oddOne;
  for (let i = 0; i <= arr.length && !foundIt; i++) {
    const candidate = arr[i];
    const count = arr.filter(x => x === candidate).length;
    if (count % 2 !== 0) {
      foundIt = true;
      oddOne = candidate;
    }
  }
  return oddOne;
}

// super clever solution
function findOddXor(A) {
  return A.reduce((a, b) => a ^ b);
}
