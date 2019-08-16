// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to apply Insertion Sort algorithm. 
    Note : Select the first element in an array and move it to the right place.
    Get the next element in the array and insert it in the correct order in the new array.
*/

const sortMe = [1, 2, 93, 147, 22, 0, 99, 5, 6, 7, 8, -9, 4, 17]
//              [9, 1, 17, 4]
//             [1, 2, 93, 147, 22, 0, -9, 5, 6, 7, 8, 9, 4, 17]

const sortedOut = insertionSort(sortMe)
console.log(sortedOut)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = 0;

        for (j = i - 1; j >= 0 && (arr[j] > temp); j--) {
            // shift the number
            arr[j + 1] = arr[j]
        }
        //Insert the copied number at the correct position
        //in sorted part. 
        arr[j + 1] = temp;
    }
    return arr;
}

