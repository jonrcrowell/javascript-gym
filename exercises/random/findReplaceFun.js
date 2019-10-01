// replace all vowels in the string with $

const replaceVowelsWithCheese = string => string.replace(/[aeiou]/gi, "$");

const replaceText =
  "Your mother was a hamster and your father smelt of Elderberries.";

console.log(replaceVowelsWithCheese(replaceText));
