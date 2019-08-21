// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to find longest substring in a given a string without repeating characters.
    shazbat
    shazbit
*/

const slide = "shazbat"
console.log(getLongestNonRepeatingSubstring(slide))


function getLongestNonRepeatingSubstring(str) {
    let maxUniqueLength = 2;
    // loop through the string and print out each substring of increasing length
    // print each 2-character substring
    for (let i = 0; i <= str.length - maxUniqueLength + 1; i++) {
        for (let j = maxUniqueLength; j <= str.length; j++) {
            console.log(str.substring(i, i + j))
        }
    }
}

function doIHaveRepeatingCharacters(str) {
    let repeats = false;
    const letters = str.split('').sort()
    for (var letter of letters) {
        const instances = letters.filter(x => x === letter).length
        if (instances > 1) {
            repeats = true;
            break;
        }
    }
    return repeats;
}