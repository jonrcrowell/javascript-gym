const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-5.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to rotate the string 'FLAMENGO'
  in right direction by periodically removing one letter from
  the end of the string and attaching it to the front

*/
const id = 'target'
const element = document.getElementById(id);
const textNode = element.childNodes[0]; // assuming no other children
let text = textNode.data;
console.log(text)

const rotator = 'The city of New York never sleeps.'
const lastLetterIndex = rotator.length - 1;
rotateMe(rotator)


function rotateMe(word) {
  const chopped = word.substring(0, lastLetterIndex)
  const lastLetter = word.charAt(lastLetterIndex)
  word = `${lastLetter}${chopped}`
  return word
}

let word = rotator;

let interval = setInterval(() => {
  word = rotateMe(word)
  textNode.data = word;
}, 100);

setTimeout(() => {
  clearInterval(interval)
}, 10000);