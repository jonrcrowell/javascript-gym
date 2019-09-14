/*
a:[1,2,3,4,5], ans:[1,1,2,3,4]
*/

const numbers = [1, 1, 1];

console.log(replacement(numbers));

function replacement(array) {
  const replaced = array.sort((a, b) => a - b).slice(0, -1);
  const all1s = array.filter(x => x !== 1).length === 0;
  all1s ? replaced.push(2) : replaced.unshift(1);
  return replaced;
}
