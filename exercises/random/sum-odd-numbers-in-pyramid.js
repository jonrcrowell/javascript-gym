/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  // calculate the starting number in the given row
  let startingNumber = 1;
  let numberCount = 0;
  let rowSum = 0;

  for (let row = 1; row < n; row++) {
    numberCount += row;
  }

  for (let i = 1; i <= numberCount; i++) {
    startingNumber += 2;
  }

  rowSum = startingNumber;

  for (let i = 1; i < n; i++) {
    startingNumber += 2;
    rowSum = rowSum + startingNumber;
  }

  return rowSum;

  // add the starting number to the correct number of larger odd numbers for the row
}

// a more elegant way
function calcSumOfOddNumbers(n) {
  return Math.pow(n, 3);
}

const testThis = 37;
console.log(rowSumOddNumbers(testThis));
console.log(calcSumOfOddNumbers(testThis));
