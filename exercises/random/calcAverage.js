/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

const grades = [100, 97, 73, 45, 98, 99, 100];

function calcAverages(grades) {
  return Math.floor(grades.reduce((a, b) => a + b, 0) / grades.length);
}

console.log(calcAverages(grades));
