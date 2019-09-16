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
