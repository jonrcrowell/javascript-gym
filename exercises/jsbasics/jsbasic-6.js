const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-6.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to determine whether a given year 
  is a leap year in the Gregorian calendar.

*/

function isLeapYear(year) {
  const divBy4 = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;

  if (!divBy4) {
    return false;
  }

  if (divBy100 && !divBy400) {
    return false;
  }

  return true;
}

console.log(`2000 is a leap year: ${isLeapYear(2000)}`)
console.log(`2001 is a leap year: ${isLeapYear(2001)}`)
console.log(`2002 is a leap year: ${isLeapYear(2002)}`)
console.log(`2003 is a leap year: ${isLeapYear(2003)}`)
console.log(`2004 is a leap year: ${isLeapYear(2004)}`)
console.log(`1700 is a leap year: ${isLeapYear(1700)}`)
console.log(`1600 is a leap year: ${isLeapYear(1600)}`)
console.log(`1800 is a leap year: ${isLeapYear(1800)}`)
console.log(`1900 is a leap year: ${isLeapYear(1900)}`)