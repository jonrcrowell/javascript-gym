function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsfunction-16.js");

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof    

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to extract unique characters from a string.
    Example string : "thequickbrownfoxjumpsoverthelazydog"
    Expected Output : "thequickbrownfxjmpsvlazydg"
  */

const rawText = "thequickbrownfoxjumpsoverthelazydog"
const uniqueLetters = keepUniqueLetters(rawText)
console.log(uniqueLetters)


// from MDN: The Set object lets you store unique values of any type
const allUnique = Array.from(new Set(rawText)).join('');
console.log(allUnique)

const keepUnique = [...new Set(rawText)].join('')
console.log(keepUnique)

function keepUniqueLetters(str) {
  const allLetters = str.split('')
  let uniqueLetters = []

  allLetters.map(function (x) {
    if (!uniqueLetters.includes(x)) {
      uniqueLetters.push(x)
    }
  }
  )

  return uniqueLetters.join('')
}