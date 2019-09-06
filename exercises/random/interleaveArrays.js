/*
Mash 2 arrays together so that the returning array has 
alternating elements of the 2 arrays. 
Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

console.log(mashArrays(arr1, arr2));

function mashArrays(array1, array2) {
  let mashed = [];
  for (let i = 0; i < array1.length; i++) {
    mashed.push(array1[i], array2[i]);
  }
  return mashed;
}
