const input =
  "Your mother was a hamster. And your father smelt of elderberries.";
const find = "er";
const replace = "!!";

console.log(findAndReplaceAll(input, find, replace));

function findAndReplaceAll(input, find, replace) {
  return input.split(find).join(replace);
}
