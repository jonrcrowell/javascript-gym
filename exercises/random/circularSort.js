/*
An array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

Complete the function/method that determines if the given array of integers is circularly sorted.

Examples
These arrays are circularly sorted (true):

[2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
[4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
[10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
[1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
[5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
[1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]

And these are not (false)
[4, 1, 2, 5]
[8, 7, 6, 5, 4, 3]
[6, 7, 4, 8]
[7, 6, 5, 4, 3, 2, 1]
*/

const amISorted = [2, 3, 4, 5, 0, 1];

console.log(isCircleSorted(amISorted));

function isCircleSorted(numbers) {
  let cutHere = 0;
  for (let i = 1; i < numbers.length && cutHere === 0; i++) {
    if (numbers[i] < numbers[i - 1]) {
      cutHere = i;
    }
  }

  const first = numbers.slice(0, cutHere);
  const second = numbers.slice(cutHere);
  const flipped = second.concat(first);
  const sorted = [...flipped].sort((a, b) => a - b);

  return JSON.stringify(flipped) === JSON.stringify(sorted); // hack to compare arrays and their values
}
