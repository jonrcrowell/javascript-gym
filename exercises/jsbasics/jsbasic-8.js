const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-8.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program where the program takes a random integer between 1 to 10, 
  the user is then prompted to input a guess number. If the user input matches with guess number, 
  the program will display a message "Good Work" otherwise display a message "Not matched".

*/

let targetNumber = Math.floor(Math.random() * 10);

let guess = prompt(`Pick a number between 1 and 10`)

console.log(guess == targetNumber ? `Nice job. You guessed the right number!` : `Sorry, you guessed wrong, sucka! The correct number was ${targetNumber}.`)