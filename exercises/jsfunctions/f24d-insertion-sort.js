// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to apply Insertion Sort algorithm. 
    Note : Select the first element in an array and push it to a new array.
    Get the next element in the array and insert it in the correct order in the new array.
*/

const scrambled = [1, 6, 8, 2, 3, 19, 5, 17, 4]
let sorted = []

for (const el of scrambled) {
    // figure out where to stick the element
    const filtered = sorted.filter(x => x < el)
    sorted.splice(filtered.length, 0, el)
}

console.log(sorted)
