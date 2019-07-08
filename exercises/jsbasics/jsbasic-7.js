const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-7.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

*/

const month = 'September'
const day = 18
const dayOfWeek = 'Friday'
const startYear = 2014
const endYear = 2050


function listYearsDateIsDayOfWeek(month, day, dayOfWeek, startYear, endYear) {
  let matchingYears = [];
  // loop from startYear to endYear
  for (let i = startYear; i <= endYear; i++) {   // ligature for < = (without a space) is <=
    if (isDateOnDayOfWeek(month, day, i, dayOfWeek)) {
      matchingYears.push(i);
    }
  }
  return matchingYears;
  // return `We are going to find out if ${month} ${day} is on a ${dayOfWeek} between ${startYear} and ${endYear}.`;
}

function isDateOnDayOfWeek(month, day, year, dayOfWeek) {
  const dateToCheck = new Date(`${month} ${day}, ${year}`);
  const dayIndex = dateToCheck.getDay();
  if (dayOfWeek === weekdays[dayIndex]) {
    return true;
  }
}

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log(`${month} ${day} falls on a ${dayOfWeek} between ${startYear} and ${endYear} in the following years:`)
console.log(listYearsDateIsDayOfWeek(month, day, dayOfWeek, startYear, endYear));