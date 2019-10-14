/*
  firstNSmallest([1,2,3,4,5],3), [1,2,3]
  firstNSmallest([5,4,3,2,1],3), [3,2,1]
  firstNSmallest([1,2,3,1,2],3), [1,2,1]
  firstNSmallest([1,2,3,-4,0],3), [1,-4,0]
  firstNSmallest([1,2,3,4,5],0), []
  firstNSmallest([1,2,3,4,5],5), [1,2,3,4,5]
  firstNSmallest([1,2,3,4,2],4), [1,2,3,2]
  firstNSmallest([2,1,2,3,4,2],2), [2,1]
  firstNSmallest([2,1,2,3,4,2],3), [2,1,2]
  firstNSmallest([2,1,2,3,4,2],4), [2,1,2,2]
*/

const firstNSmallest = (numbers, count) => {
  let smallest = null;
  const whittled = [...numbers];
  for (let i = 0; i < count; i++) {
    const min = Math.min(...whittled);
    smallest = min;
    const index = whittled.indexOf(min);
    whittled.splice(index, 1);
  }
  const result = numbers.filter(x => x <= smallest).reverse();
  while (result.length > count) {
    const max = Math.max(...result);
    const index = result.indexOf(max);
    result.splice(index, 1);
  }
  return result.reverse();
};

// and a much cleaner version
function rFirstNSmallest(array, n) {
  const result = [...array];
  while (result.length != n) {
    result.splice(result.lastIndexOf(Math.max(...result)), 1);
  }
  return result;
}

console.log(
  rFirstNSmallest(
    [
      -7,
      -2,
      7,
      -2,
      0,
      -6,
      -2,
      4,
      9,
      8,
      -10,
      6,
      2,
      8,
      -7,
      -8,
      9,
      -8,
      -7,
      -5,
      1,
      2,
      -7,
      1,
      -9,
      -8,
      -9,
      -8,
      -3
    ],
    15
  )
);
