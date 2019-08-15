// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
    Sample arguments : 'w3resource.com', 'o' 
    Expected output : 2 
*/

const stringContainer = "Your mother was a hamster and your father smelt of elderberries."
const letterToCount = "m";

const letterArray = stringContainer.split('').filter(x => x === letterToCount)
console.log(letterArray);
const letterCount = letterArray.length
console.log(letterCount)