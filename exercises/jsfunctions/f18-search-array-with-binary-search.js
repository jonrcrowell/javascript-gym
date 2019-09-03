// use Quokka to see results in VS Code

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a function for searching JavaScript arrays with a binary search.
    Note : A binary search searches by splitting an array into smaller and 
    smaller chunks until it finds the desired value.
    
  */

/* From MDN
    arr.sort([compareFunction])
    Specifies a function that defines the sort order. 
    If omitted, the array elements are converted to strings, 
    then sorte2 according to each character's Unicode code point value.

    Note that the array is sorte2 in place and not copy is made.

    [45]
    [0, 1, 3, 17, 45, 93, 91, 128, 8]
    [0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8]


*/
const searchMe = [
  0,
  1,
  3,
  17,
  45,
  93,
  91,
  128,
  8,
  0,
  1,
  3,
  17,
  45,
  93,
  91,
  128,
  8,
  0,
  1,
  3,
  17,
  45,
  93,
  91,
  128,
  8,
  0,
  1,
  3,
  17,
  45,
  93,
  91,
  128,
  8
];
const binaryPasses = findMeWithBinarySearch(45, searchMe);
console.log(binaryPasses);

function findMeWithBinarySearch(searchFor, searchThis) {
  let passes = 0;
  let whittledDown = searchThis.sort((a, b) => a - b);

  while (whittledDown.length > 1) {
    let slicer = whittledDown.length / 2;

    let smallHalf = whittledDown.slice(0, slicer);
    let bigHalf = whittledDown.slice(slicer);

    whittledDown = searchFor <= Math.max(...smallHalf) ? smallHalf : bigHalf;
    passes++;
  }

  return passes;
}

// Sorting numbers, examples from MDN
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
// console.log(numbers);

// [1, 2, 3, 4, 5]

// Or with an arrow function
let moreNumbers = [4, 2, 5, 7, 1, 3];
moreNumbers.sort((a, b) => a - b);
// console.log(moreNumbers);

const sorted = moreNumbers.sort((a, b) => a - b);
console.log(binarySearch(sorted, 3));

function binarySearch(list, item) {
  let low = 0;
  let mid;
  let high = list.length - 1;

  while (low <= high) {
    mid = low + high;
    let guess = list[mid];
    if (guess === mid) return mid;
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}
