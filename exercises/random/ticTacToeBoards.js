/*
Test.describe("Basic Tests",_=>{
  Test.assertEquals(displayBoard(["O", "X", "X", "O"],2)," O | X \n-------\n X | O ");
  Test.assertEquals(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "],3)," O | X |   \n-----------\n   | X |   \n-----------\n X | O |   ");
  Test.assertEquals(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],5)," O | X |   |   | X \n-------------------\n   | X | O |   | O ");
  Test.assertEquals(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],2)," O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ");
  Test.assertEquals(displayBoard(["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1"],6)," 1 | 2 | 3 | 4 | 5 | 1 \n-----------------------\n 2 | 3 | 4 | 5 | 1 | 2 \n-----------------------\n 3 | 4 | 5 | 1 | 2 | 3 \n-----------------------\n 4 | 5 | 1 | 2 | 3 | 4 \n-----------------------\n 5 | 1 | 2 | 3 | 4 | 5 \n-----------------------\n 1 | 2 | 3 | 4 | 5 | 1 ");
})
*/

const board = ["O", "X", " ", " ", "X", " ", "X", "O", " "];
const width = 3;

console.log(displayBoard(board, width));

function displayBoard(board, width) {
  let display = "";
  const dashes = (width * 2 - 1) * 2 + 1;
  for (let i = 0; i < board.length; i += width) {
    const row = board.slice(i, i + width);
    if (i > 0) display += "\n";
    display += ` ${row.join(" | ")} `;
    if (i + width < board.length) display += `\n${"-".repeat(dashes)}`;
  }
  return display;
}

/*
------- 2 = 7 is it 3 per width + 1? No. width + (n-1) separators with a space around each. 2 + 1 = 3 plus spaces = space 1 space 2 space 3 space
----------- 3 = 11  => 3 + 2 = 5 plus spaces = space 1 space 2 space 3 space 4 space 5 space
(width + width -1) *2 + 1

*/
