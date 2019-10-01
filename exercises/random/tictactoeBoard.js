/*
Test.assertEquals(displayBoard(["O", "X", "X", "O"],2)," O | X \n-------\n X | O ");
*/

const boardState = '["O", "X", "X", "O"]';
const rows = 2;

function displayBoard(state, numRows) {
  return state;
}

// const chunkArr = (arr, size) =>
//   arr.reduceRight((res, _, __, self) => [...res, self.splice(0, size)], []);

// console.log(chunkArr(boardState, 3));

console.log(
  [0, 1, 2, 3, 4].reduceRight(function(
    accumulator,
    currentValue,
    index,
    array
  ) {
    return accumulator + currentValue;
  })
);
