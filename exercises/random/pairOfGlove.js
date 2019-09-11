/*
Pair of gloves
Winter is comming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

Example :
[['red','red'],1],
        [['red','green','blue'],0],
        [['gray','black','purple','purple','gray','black'],3]
*/
let myGloves = ["red", "red"];
console.log(numberOfPairs(myGloves)); // red and blue

function numberOfPairs(gloves) {
  const sorted = [...gloves].sort();
  let pairs = 0;
  let pointer = 0;
  while (pointer < sorted.length) {
    if (sorted[pointer] === sorted[pointer + 1]) {
      pairs++;
      pointer += 2;
    } else {
      pointer++;
    }
  }
  return pairs;
}
