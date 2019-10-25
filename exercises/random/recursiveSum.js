// countdown
const countDownFrom = number => {
  if (number < 0) return;

  console.log(number);
  countDownFrom(number - 1);
};

countDownFrom(10);

// sum([2, 3, 4], 1) should equal 5.
function sum(arr, number) {
  if (number < 0) return 0;
  let total = arr[number];
  return total + sum(arr, number - 1);
}

console.log(sum([2, 3, 4, 5, 7, 11], 3));

// count vowels

const isVowel = char => /[aeiou]/.test(char);

function countVowels(str) {
  if (str.length == 0) return 0;
  let first = isVowel(str[0]) ? 1 : 0;
  return first + countVowels(str.slice(1));
}

console.log(countVowels("The quick brown fox"));
