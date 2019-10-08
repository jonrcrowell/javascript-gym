/*
positive and negative lookbehinds
(?<=x)  positive lookbehind
(?<!x)  negative lookbehind
*/

const lookBack = "Hello World";

// find l followed by any letter if preceeded by an e
console.log(lookBack.match(/(?<=e)(l.)/g));
// ["ll"]

// only if NOT preceeded by an e
console.log(lookBack.match(/(?<!e)(l.)/g));
// ["lo", "ld"]
