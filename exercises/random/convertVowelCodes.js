const numbers = [
  118,
  117,
  120,
  121,
  117,
  98,
  122,
  97,
  120,
  106,
  104,
  116,
  113,
  114,
  113,
  120,
  106
];

function replaceVowelCodes(list) {
  const isVowelCode = int => /[aeiou]/.test(String.fromCharCode(int));
  return list.map(x => (isVowelCode(x) ? String.fromCharCode(x) : x));
}

console.log(replaceVowelCodes(numbers));
