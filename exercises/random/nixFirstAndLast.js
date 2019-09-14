const words = "Your mother was a hamster";

console.log(sliceFirstAndLast(words));

function sliceFirstAndLast(string) {
  // negative indexes count backwards from the end of the string
  // note that array.slice() works the same way
  return string.slice(1, -1);
}
