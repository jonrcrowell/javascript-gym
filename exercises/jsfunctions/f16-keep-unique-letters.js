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

const rawText = "theaaaquickbrownfoxjumpsoverthelazydog"
const uniqueLetters = keepUniqueLetters(rawText)
const uniqueLettersInOrder = keepUniqueLettersInOrder(rawText)
console.log(uniqueLetters)
console.log(uniqueLettersInOrder)

function keepUniqueLetters(str) {
  const sortedText = str.split('').sort()
  let uniqueText = []

  sortedText.map((x, idx) => sortedText[idx - 1] !== x
    ? uniqueText.push(x) : console.log(x)
  )

  return uniqueText.join('')
}

function keepUniqueLettersInOrder(str) {
  return str
}

// need to get this to work without the console.log in the ternary statement
// need to get this to work without sorting the string in order to return
// the string in the correct order