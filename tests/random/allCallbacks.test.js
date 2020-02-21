/*
https://www.codewars.com/kata/enumerable-magic-number-1-true-for-all/train/javascript
Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)
*/

const list = [1, 2, 3, 4, 5, 55];
const cb = number => number > 9;

console.log(`All of the values are true: ${all(list, cb)}`);
console.log(`Every one of the values is true: ${useEvery(list, cb)}`);
console.log(`Some of the values are true: ${useSome(list, cb)}`);

function all(arr, fun) {
  return arr.map(x => fun(x)).filter(x => x).length === list.length;
}

function useEvery(arr, fun) {
  return arr.every(fun);
}

function useSome(arr, fun) {
  return arr.some(fun);
}
