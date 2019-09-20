/*
..Or rather, what's a name in? For us, a particular string is where we are looking for a name.
Task
Test whether or not the string contains all of the letters which spell a given name, in order.

The format
A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``

nameInStr("Across the rivers", "chris") --> true
            ^      ^  ^^   ^
            c      h  ri   s

Contains all of the letters in "chris", in order.
*/
console.log(joinStar("Your mother was a hamster"));
const prose = "'Under a sea'";
const name = "chris";

// this replaces all of the declarative code
const nameInString1 = (prose, name) =>
  new RegExp(name.split("").join(".*"), "i").test(prose);

// so does this
function nameInString2(str, name) {
  return new RegExp(name.split("").join(".*"), "i").test(str);
}

function joinStar(string) {
  const split = string.split("");
  const joinstar = split.join(".*");
}

console.log(nameInString1(prose, name));

function nameInString(prose, name) {
  let leftOver = prose.toLowerCase().split("");
  let toMatch = name.toLowerCase().split("");
  let maybe = true;

  toMatch.reduce((matched, current) => {
    const sliceHere = findAndSlice(leftOver, current);
    if (sliceHere) {
      leftOver = leftOver.slice(sliceHere);
      matched = true;
    } else {
      maybe = false;
    }
    return matched;
  }, false);

  return maybe;
}

function findAndSlice(array, letter) {
  let found = false;
  let sliceHere = 0;
  array.forEach((x, i) => {
    if (x === letter && !found) {
      found = true;
      sliceHere = i + 1;
    }
  });
  return sliceHere;
}

// and with a loop
function nameInStringLoopy(str, name) {
  name = name.toLowerCase();
  str = str.toLowerCase();

  let index = 0;

  for (let char of str) {
    if (char === name[index]) index++;
  }

  return index === name.length;
}
