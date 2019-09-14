/*
Test.assertEquals(replaceAll("string-string", "ing", "!"), "str!-str!", "Matches found");

Test.assertEquals(replaceAll("", "", "-"), "-", "Empty input, empty find");
Test.assertEquals(replaceAll("1", "", "-"), "-1-", "Single-character input, empty find");
Test.assertEquals(replaceAll("123", "", "-"), "-1-2-3-", "Empty string as find");/..
*/

const input = "1";
const find = "";
const replace = "-";

console.log(findAndReplaceAll(input, find, replace));

function findAndReplaceAll(input, find, replace) {
  let replaced = input.split(find).join(replace);
  if (!replaced) return replace;
  return find ? replaced : `${replace}${replaced}${replace}`;
}
