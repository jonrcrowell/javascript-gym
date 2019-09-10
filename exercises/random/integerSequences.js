/*
Write a function findSequences that accepts a positive integer n. 

Your task is to find such integer sequences:

Continuous positive integer and their sum value equals to n

 For example, n = 15 
 valid integer sequences:
 [1,2,3,4,5]  (1+2+3+4+5==15)
 [4,5,6]          (4+5+6==15)
 [7,8]              (7+8==15)
The result should be an array [sequence 1,sequence 2...sequence n], sorted by ascending order of the length of sequences; If no result found, return [].

Some examples:

findSequences(3) === [[1,2]]

findSequences(15) === [[7,8],[4,5,6],[1,2,3,4,5]]

findSequences(20) === [[2, 3, 4, 5, 6]]

findSequences(100) === [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]]

findSequences(1) === []
*/

// this works but is super slow
console.log(findSequences(100));

function findSequences(number) {
  let numbers = [...Array(number + 1).keys()];
  numbers.shift();
  let sequences = [];

  const checkSequence = x => {
    let sequence = [];
    let total = x;
    let match = false;
    while (total < number && !match) {
      sequence.push(total);
      total++;
      if (sequence.reduce((a, b) => a + b, 0) === number) {
        sequences.unshift(sequence);
        match = true;
      }
    }
  };
  numbers.forEach(x => {
    checkSequence(x);
  });
  return sequences;
}
