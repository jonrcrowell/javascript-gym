const first = ["apple", "banana", "pear"];
const second = ["apple", "banana", "pear"];

console.log(first === second); // false, the objects are different

console.log(JSON.stringify(first)); // the string '["apple","banana","pear"]'

console.log(JSON.stringify(first) === JSON.stringify(second)); // true, the contents of the arrays are the same (the strings match)
