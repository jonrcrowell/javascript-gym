/*
Test.assertEquals(minimumSteps([4,6,3], 7), 1);
  Test.assertEquals(minimumSteps([10,9,9,8], 17), 1);
  Test.assertEquals(minimumSteps([8,9,10,4,2], 23), 3);
  Test.assertEquals(minimumSteps([19,98,69,28,75,45,17,98,67], 464), 8);
  Test.assertEquals(minimumSteps([4,6,3], 2), 0);
*/

console.log(minimumSteps([4, 6, 3], 7));

function minimumSteps(numbers, value) {
  const sorted = numbers.sort((a, b) => a - b);
  let steps = 0;
  let runningTotal = numbers[0];
  let minSteps = 0;

  if (runningTotal > value) return 0;

  for (let i = 1; i <= numbers.length; i++) {
    runningTotal += numbers[i];
    steps++;
    if (runningTotal >= value) {
      minSteps = steps;
      break;
    }
  }

  return minSteps;
}
