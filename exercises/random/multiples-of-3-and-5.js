/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

function solution(number) {
  if (number < 3) return 0;
  const matches = [];
  for (var i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      matches.push(i);
    }
  }
  return matches.length > 0 ? matches.reduce((a, b) => a + b) : 0;
}

console.log(solution(10));
