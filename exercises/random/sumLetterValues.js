console.log(sumLetterValues("aaa"));

function sumLetterValues(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterValue = x => alphabet.indexOf(x) + 1;
  return str.split("").reduce((a, b) => a + letterValue(b), 0);
}

function convertSumToLetter(letters) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterValue = x => alphabet.indexOf(x) + 1;
  const sum = letters.reduce((a, b) => a + letterValue(b), 0) % 26;
  return sum === 0 ? "z" : alphabet.substring(sum - 1, sum);
}

console.log(convertSumToLetter("".split("")));
