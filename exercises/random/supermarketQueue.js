/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
*/
queueTime([5, 3, 4], 1); // should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2); // should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2); // should return 12

console.log(queueTime([2], 1));

console.log(
  queueTime(
    [
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201,
      201
    ],
    10
  )
); // and n = 10 - Expected: 402, instead got: NaN

function queueTime(queue, numTills) {
  let runningTotal = 0;
  let tills = Array(numTills).fill(0);

  // send customers to open tills
  while (queue.length > 0) {
    for (let i = 0; i < numTills && queue.length > 0; i++) {
      if (tills[i] === 0 && queue.length > 0) {
        tills[i] = queue.shift();
      }
    }
    const fastest = Math.min(...tills.filter(x => x !== 0));
    tills = tills.map(x => x - fastest);
    runningTotal += fastest;
  }

  // get the longest time from the people still checking out and add it to the total
  return runningTotal + Math.max(...tills);
}
