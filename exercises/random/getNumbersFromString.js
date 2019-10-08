console.log(getNumberFromString("I am a 42 year old hamster"));
console.log(regexpGetNumberFromString("42 is the answer to all 77 questions"));

function getNumberFromString(s) {
  return s
    .split("")
    .filter(x => /[0-9]/.test(x))
    .join("")
    .toString();
}

function regexpGetNumberFromString(s) {
  return s.replace(/\D/g, ""); // uppercase D works, lowercase d gets all non-numeric values
}
