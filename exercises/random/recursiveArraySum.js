const numbers = [0, 1, 2];

const recursiveSum = list => {
  // base case
  if (list.length === 0) return 0;

  // recursion case
  const [a, ...leftover] = list;
  let total = list[0];
  return total + recursiveSum(leftover);
};

console.log(recursiveSum(numbers));

// sum([2, 3, 4], 1) should equal 5.
function sum(arr, number) {
  if (number < 0) return 0;

  let total = arr[number];
  return total + sum(arr, number - 1);
}

console.log(sum(numbers, 2));
