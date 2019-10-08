// sum the numbers in array excluding the highest and lowest numbers

const array = [6, 2, 1, 8, 10];

console.log(sumArray(array));

function sumArray(array) {
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
