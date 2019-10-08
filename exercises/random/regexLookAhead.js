/*
. = any character
so l. matches an l followed by any character
*/

const searchMe = `Hello World`;

console.log(searchMe.match(/(l.)/g));
// ["ll", "ld"]
// why don't I also get "lo"?

console.log(searchMe.match(/(l.)$/g)); // at the end of the string
// ["ld"]

// positive look ahead
console.log(searchMe.match(/(l.)(?=o)/g)); // only if followed by an o
// ["ll"]

// negative look ahead
console.log(searchMe.match(/(l.)(?!o)/g));
// ["lo, "ld"]
