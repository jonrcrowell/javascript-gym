const lookup = {
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

function replaceUsingLookup(string) {
  return string.replace(/[ąćęłńóśźż]/g, match => lookup[match]);
}

console.log(replaceUsingLookup(polishText));
