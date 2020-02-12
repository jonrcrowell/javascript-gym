// Calculate the number of inversions in array
function countInversions(array) {
  const counts = [];
  for (let i = 0; i < array.length; i++) {
    const testArray = array.slice(i + 1);
    counts.push(testArray.filter(x => x < array[i]).length);
  }
  return counts.reduce((x, y) => x + y, 0);
}

console.log(countInversions([1, 2, 4, 3]));
