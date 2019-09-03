/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)
*/

console.log(
  findTheMissingLetter(["a", "b", "c", "d", "e", "f", "g", "h", "i", "m"])
);

function findTheMissingLetter(letters) {
  let missing = 0;
  const codes = letters.map(x => x.charCodeAt(0));

  codes.forEach(function(x, i) {
    if (codes[i + 1] - x > 1) {
      missing = x + 1;
    }
  });
  return String.fromCharCode(missing);
}
