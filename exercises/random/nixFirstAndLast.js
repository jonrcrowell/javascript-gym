const words = "Your mother was a hamster";

console.log(sliceFirstAndLast(words));

function nixFirstAndLast(string) {
  const pruned = string.split("");
  pruned.shift();
  pruned.pop();
  return pruned.join("");
}

function sliceFirstAndLast(string) {
  // negative indexes count backwards from the end of the string
  return string.slice(1, -1);
}
