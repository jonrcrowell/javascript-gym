/*
puts sum(numbers)
9.2
*/

numbers = [1, 5.2, 4, 0, -1];

console.log(sumArray(numbers));

function sumArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
