/*
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
*/

// timeout with correct answer

console.log(nthSmallest([1, 5], [2], [4, 8, 9], 4));

function nthSmallest(args) {
  const wip = Array.from(arguments);
  const nth = wip.pop();
  let merged = [];
  for (let i = 0; i < wip.length; i++) {
    merged = merged.concat(wip[i]);
  }
  return merged.sort((a, b) => a - b)[nth - 1];
}
