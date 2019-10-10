/*
I am going to set up several ways to apply multiple functions sequentially to a starting input
From worst to best, from dirtiest and buggiest to cleanest and easiest to understand
*/
const input = 11;
const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

// worst way, keeping track of progress with global variables
const doubled = multiplyBy2(input);
const increasedBy3 = add3(doubled);
const dividedBy5 = divideBy5(increasedBy3);
console.log(
  `Using global constants as placeholders, here is the result: ${dividedBy5}`
);

// a maybe slightly better way, by nesting the functions
const result = divideBy5(add3(multiplyBy2(input)));
console.log(
  `Nesting functions to eliminate global variables, here is the result: ${result}`
);

// and the functional way, using the pointfree style
const funcy = [multiplyBy2, add3, dividedBy5].reduce(
  (accum, func) => func,
  input
);
console.log(
  `Reducing a list of functions with the pointfree style gives us ${funcy}`
);
