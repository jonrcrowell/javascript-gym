function palindrome(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  }
  const isPalindrome = string =>
    string
      .split("")
      .reverse()
      .join("") === string;

  let containsPalindrome = false;

  for (let i = 0; i < num.toString().length - 1; i++) {
    const forwards = num.toString().slice(i, i + 2);
    containsPalindrome = isPalindrome(forwards);
    if (containsPalindrome) break;
  }
  if (containsPalindrome) return true;
  for (let i = 0; i < num.toString().length - 1; i++) {
    const forwards = num.toString().slice(i, i + 3);
    containsPalindrome = isPalindrome(forwards);
    if (containsPalindrome) break;
  }
  return containsPalindrome;
}

//console.log(palindrome(123322367));

const test1 = 22;
const test2 = 123322367;

console.log(palindrome(test2));
