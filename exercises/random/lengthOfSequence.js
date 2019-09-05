/*
As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

`lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)`
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurances of the number to searched for, return 0.

Test.assertEquals(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
Test.assertEquals(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
Test.assertEquals(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
Test.assertEquals(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');
*/

const sequence = [1, 1];

console.log(lengthOfSequence(sequence, 1));

function lengthOfSequence(numbers, bookend) {
  if (numbers.filter(x => x === bookend).length !== 2) {
    return 0;
  }
  const firstBookend = numbers.indexOf(bookend);
  let remainder = numbers.slice(firstBookend + 1);
  return remainder.indexOf(bookend) + 2; // inclusive of bookends
}
