// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to find the first not repeated character.
    Sample arguments : 'abacddbec'   "Your mother was a hamstery and your father smelt of elderberries."
    Expected output : 'e' 
*/

const stringContainer = 'abacddbec'
const strArray = stringContainer.toLowerCase().split('');
let firstUniqueLetter = ''

for (let el of strArray) {
    if (isLetterUnique(el, strArray)) {
        firstUniqueLetter = el;
        break;
    }
}

console.log(firstUniqueLetter);

function isLetterUnique(letter, stringArray) {
    return stringArray.filter(x => x === letter).length === 1
}