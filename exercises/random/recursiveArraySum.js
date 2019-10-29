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
