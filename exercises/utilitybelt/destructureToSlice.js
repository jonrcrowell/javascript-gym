// Destructure with rest operator to slice an arry

const numbers = [1, 2, 3, 4, 5, 7, 8];

const [a, b, ...leftovers] = numbers;

console.log(a); // numbers[0]
console.log(b); // numbers[1]
console.log(leftovers); // everything after b
