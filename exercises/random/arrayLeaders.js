/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

arrayLeaders ({5, 2, -1}) ==> return {5, 2}

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
*/

console.log(arrayLeaders([0, -1, -29, 3, 2]));

function arrayLeaders(numbers) {
  const leaders = [];
  numbers.map((x, i) => {
    if (i < numbers.length - 1) {
      const sumright = numbers.slice(i + 1).reduce((a, b) => a + b);
      if (x > sumright) leaders.push(x);
    }
  });
  const last = numbers[numbers.length - 1];
  if (last > 0) leaders.push(last);
  return leaders;
}
