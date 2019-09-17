/*
RegExp can be set up with the new keyword or with slashes
If you need to create the RegExp at run time, use the new version
If you know the pattern at design time, you can use the slashes
For Example
string.replace(/5/, "S")
or
const matchMe = "er"
const regex = new RegExp(matchMe, "g")  arguments are pattern and flags
string.replace(regex, "erz")  arguments are the regex and the text to replace the matches with
*/

const input =
  "Your mother was a hamster. And your father smelt of elderberries.";
const find = "er";
const replace = "!!";

console.log(findReplaceRegex(input, find, replace));

function findAndReplaceAll(input, find, replace) {
  return input.split(find).join(replace);
}

function findReplaceRegex(input, find, replace) {
  const regex = new RegExp(find, "g");
  let replaced = input.replace(regex, `${replace}`);
  return replaced;
}
