const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-9.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to calculate days left until next Christmas.

*/

// If the date is after Christmas and before New Year, set the year to next year
// If the date is between January 1st and December 24th, set the year to current year

// utilities
const oneDay = 1000 * 60 * 60 * 24;
function diffDays(firstDate, secondDate) {
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}

const today = new Date();
const todayIsChristmas = today.getDate() === 25 && today.getMonth() === 11
const betweenChristmasAndNewYears = today.getMonth() === 11 && today.getDate() >= 25
const futureChristmasYear = betweenChristmasAndNewYears ? today.getFullYear() + 1 : today.getFullYear()
const christmas = new Date(futureChristmasYear, 11, 25)
const daysToNextChristmas = diffDays(today, christmas)
const nonChristmasMessage = daysToNextChristmas === 1 ?
  `There is only 1 day left until Christmas. I hope you have all your shopping and wrapping done!` :
  `There are ${daysToNextChristmas} days until Christmas!`

todayIsChristmas ? console.log(`Today is Christmas! It's too late to go shopping now! You have ${daysToNextChristmas} until next Christmas.`) :
  console.log(nonChristmasMessage)