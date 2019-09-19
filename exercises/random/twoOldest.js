/*
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return 
the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
*/

const ages = [1, 2, 10, 8, 13, 6, 4];

console.log(twoOldestAges(ages));

function twoOldestAges(numbers) {
  return numbers.reduce((target, current) => {
    if (current > target[0]) {
      target[0] = current;
    }
    if (target[0] > target[1]) {
      [target[1], target[0]] = [target[0], target[1]];
    }
    return target;
  }, Array(2).fill(0));
}
