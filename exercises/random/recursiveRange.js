function rangeOfNumbers(startNum, endNum) {
  // base case
  if (startNum === endNum) return [startNum];
  // recursion case
  const range = rangeOfNumbers(startNum, endNum - 1);
  range.push(endNum);
  return range;
}

console.log(rangeOfNumbers(4, 8)); // [4,5,6,7,8]

function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1);
    numbers.push(n);
    return numbers;
  }
}

console.log(count(10));
