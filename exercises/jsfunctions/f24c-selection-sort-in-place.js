// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to apply Selection Sort algorithm. 
    Note : take the smallest element in an array and push it to a new array
    Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
    [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]
*/

const scrambled = [1, 6, 8, 2, 5, 17, 4]
let sorted = [...scrambled]
let smallest = 0

function swapUs(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]]
}

for (let i = 0; i < scrambled.length; i++) {
    smallest = Math.min(...sorted.filter(x => x > smallest))
    const index = sorted.indexOf(smallest)
    // optimize for adaptability
    if (i !== index) swapUs(sorted, i, index)
}

console.log(sorted)
