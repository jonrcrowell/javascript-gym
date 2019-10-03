function removeFromEnd(text, char) {
  const backwards = text.split("").reverse();
  let found = false;
  for (let i = 0; i < backwards.length && !found; i++) {
    if (backwards[0] === char) {
      backwards.shift();
    } else {
      found = true;
    }
  }
  return backwards.reverse().join("");
}

const text = "Howdy!!!";

console.log(removeFromEnd(text, "!"));
console.log(regexpRemoveFromEnd(text));

// and a DRAMATICALLY better way to do this is with a regular expression
function regexpRemoveFromEnd(text) {
  return text.replace(/!+$/, "");
}
