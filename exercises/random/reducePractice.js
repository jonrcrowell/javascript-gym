// log out the result of each operation
// exercises courtesy of Joe Eames
// Delete are reduce answers and try again
// Repeat until reduce is second nature
// Very cool to use StackBlitz for this:
// https://stackblitz.com/edit/js-fcmerm?file=index.js

let numbers = [2, 6, 10];

// add all the numbers together
let sum = numbers.reduce((a, b) => a + b); // I did this one for you
console.log(sum);

// multiply all the numbers together
let product = numbers.reduce((x, y) => x * y);
console.log(product);

// subtract all the numbers from 100
let subtract = numbers.reduce((x, y) => x - y, 100);
console.log(subtract);

// calculate the total number of years of experience
let consultants = [
  { name: "Joe", yearsExperience: 12 },
  { name: "Bob", yearsExperience: 4 },
  { name: "Donny", yearsExperience: 33 },
  { name: "Philip", yearsExperience: 15 }
];

let years = consultants.reduce((x, y) => x + y.yearsExperience, 0);
console.log(years);

// which superhero hits the most home runs?
// find out by concatenating the 2nd letter of each word
let secretMessage = [
  "abacus",
  "lamp",
  "straight",
  "amsterdam",
  "fat",
  "anagram"
];
let hero = secretMessage.reduce((x, y) => x + y[1], "");
console.log(hero);

// what do you call an old snowman?
// find out by concatenating the 2nd to last letter
// of each word, in reverse order
let backwardsSecretMessage = ["corn", "water", "cats", "amsterdam", "awe"];
let snowman = backwardsSecretMessage.reduceRight(
  (x, y) => x + y[y.length - 2],
  ""
);
console.log(snowman);

// the String.split method creates an array of strings
// based on what you pass into the split method
// let lyrics = "baby baby baby"
// lyrics.split(' ') = ['baby', 'baby', 'baby']
//
// use the split method and reduce to create a single
// array of all the words from each of the sentences
// the result should be the following:
// ['the', 'quick', 'brown', ... 'is', 'Mr.', 'Plow']
let sentences = [
  "the quick brown fox",
  "don't care what others think",
  "use the force luke",
  "that name again is Mr. Plow"
];

let words = sentences.reduce((x, y) => x + " " + y).split(" ");
console.log(words);
