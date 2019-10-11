const polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z"
};

const polishText = "Jędrzej Błądziński";

const removeDiacritics = text => {
  return text
    .split("")
    .map(x => (polishLetters[x] ? polishLetters[x] : x))
    .join("");
};

console.log(removeDiacritics(polishText));
console.log(correctPolishLetters(polishText));

// I like this better
function correctPolishLetters(string) {
  return string.replace(/[ąćęłńóśźż]/g, match => polishLetters[match]);
}
