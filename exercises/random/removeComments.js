/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

const commented = "apples, pears # and bananas\ngrapes\nbananas !apples";
// const bang = commented.split("!").join("#");
// console.log(bang);
const markers = ["#", "!"];

console.log(cleaner(commented, markers));

function cleanedUp(string, markers) {
  let splitlines = string;
  for (let marker of markers) {
    splitlines = splitlines.split(marker).join(markers[0]);
  }

  return splitlines
    .split("\n")
    .map(x => x.split(markers[0]).slice(0, 1))
    .map(x => x[0].trim())
    .join("\n");
}

// how are all the markers used? Does reduce loop through them?
// why yes, yes it does
function cleaner(input, markers) {
  const cleaned = input
    .split("\n")
    .map(line =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    )
    .join("\n");
  return cleaned;
}
