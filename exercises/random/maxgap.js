console.log(maxGap([1, 3, 13, 9, 5]));

function maxGap(numbers) {
  let maxGap = 0;
  numbers
    .sort((a, b) => a - b)
    .forEach(function(x, i) {
      const gap = numbers[i + 1] - x;
      maxGap = gap > maxGap ? gap : maxGap;
    });
  return maxGap;
}
