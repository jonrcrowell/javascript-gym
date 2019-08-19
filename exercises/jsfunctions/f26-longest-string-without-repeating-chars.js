// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to find longest substring in a given a string without repeating characters.
    shazbat
    shazbit
*/

const slide = "shazbit"
console.log(doIHaveRepeatingCharacters(slide))
getLongestNonRepeatingSubstring(slide)


function getLongestNonRepeatingSubstring(str) {
    // if we find a substring without repeats, store the substring and its length and its start position
    let nonRepeatingString = "";
    let startPos = 0;

    // loop through the string evaluating substrings of length 2 through the length of the string
    for (let i = 0; i < str.length; i++) {
        // WIP
        // console.log(`${nonRepeatingString} starts at position ${startPos}`)
    }

    // for each substring, start at the beginning of the string and advance 1 character at a time until we fine a substring without repeats

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