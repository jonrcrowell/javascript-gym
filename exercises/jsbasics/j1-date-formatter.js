function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsbasic-1.js");

/* 
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38
*/

let dayOfWeek = "what days is it?";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hour = 99;
let amPm = "--";
let minutes = 30;
let seconds = 38;

const today = new Date();
console.log(today);

// get the values from the today's date
hour = today.getHours();
const dayIndex = today.getDay();
dayOfWeek = weekdays[dayIndex];
amPm = hour > 12 ? "PM" : "AM";
hour = amPm === "PM" ? hour - 12 : hour;
minutes = today.getMinutes();
seconds = today.getSeconds();

// solution
printThis(`Today is : ${dayOfWeek}`);
printThis(`Current time is : ${hour} ${amPm} : ${minutes} : ${seconds}`);
