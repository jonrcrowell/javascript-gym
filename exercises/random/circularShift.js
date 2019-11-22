// how do I implement a circular shift?
// say for 1-26
// if I add a number and my result is larger than 26, I have to go back to the startOffset
// I'll use mod

const range = [1, 26];
const size = range[1] - range[0] + 1;
const startOffset = 0; // must always be in the size of the range

if (startOffset > size || startOffset < 0) {
  throw "Um, this isn't going to work. The startOffset is out of bounds.";
}

// startOffset of 0 is the beginning position in the range
const shift = 25;
const end = (startOffset, shift) => ((startOffset + shift) % size) + range[0];
console.log(end(startOffset, shift));
