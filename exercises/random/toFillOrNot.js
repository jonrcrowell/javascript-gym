/*
Create an array of n length without filling it
What is the result?
*/

const emptyHeadedCharlie = Array(3);
const zeroCharlie = Array(3).fill(0);

console.log(emptyHeadedCharlie);
console.log(zeroCharlie);

/*
The empty array is in fact empty, but it has n placeholders
*/

emptyHeadedCharlie[0] = 1;
console.log(emptyHeadedCharlie);

/*
Which isn't all that useful because we can still insert data wherever we want
in the array
*/
emptyHeadedCharlie[3] = 4;
console.log(emptyHeadedCharlie);
