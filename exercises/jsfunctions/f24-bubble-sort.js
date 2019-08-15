// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to apply Bubble Sort algorithm. 
    Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be bubbleSorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
    Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
    [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]
*/

const scrambled = [1, 4, 9, 12, 2347, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]
let fullySorted = false;
let bubbleSorted = [...scrambled]
let bubblePasses = 0;

for (let i = 0; i < bubbleSorted.length; i++) {
    if (fullySorted) { break; }
    bubbleBiggest(bubbleSorted.length - i);
    console.log(bubbleSorted)
    bubblePasses++;
}

function bubbleBiggest(comparisons) {
    let swaps = 0;
    // compare the first number to the second
    for (let i = 0; i < comparisons; i++) {
        if (bubbleSorted[i] > bubbleSorted[i + 1]) {
            [bubbleSorted[i], bubbleSorted[i + 1]] = [bubbleSorted[i + 1], bubbleSorted[i]]
            swaps++;
        }
    }
    // if we didn't sort any of the pairs, we are fully sorted
    fullySorted = swaps === 0;
}

console.log("OK, now we should be finished...")
console.log(`It took us ${bubblePasses} passes to sort the array.`)
console.log(scrambled)
console.log(bubbleSorted)