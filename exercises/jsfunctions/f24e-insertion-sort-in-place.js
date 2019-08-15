// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to apply Insertion Sort algorithm. 
    Note : Select the first element in an array and move it to the right place.
    Get the next element in the array and insert it in the correct order in the new array.
*/

const sortMe = [1, 2, 5, 6, 7, 8, 9, 4, 17, 3, 0]
//              [9, 1, 17, 4]
//             [1, 2, 5, 6, 7, 8, 9, 4, 17]
debugger;

for (let i = 1; i < sortMe.length; i++) {
    // 1
    const el = sortMe[i]
    if (i === 1) {
        if (el < sortMe[0]) {
            swapUs(sortMe, 0, 1)
            continue;
        }
    }

    sortMe.splice(i, 1)

    for (let j = 0; j <= i; j++) {
        if (j === 0 && el < sortMe[0]) {
            sortMe.unshift(el);
            break;
        }
        if (j === i - 1 && el > sortMe[j]) {
            sortMe.splice(j + 1, 0, el)
            break;
        }
        if (el > sortMe[j] && el < sortMe[j + 1]) {
            sortMe.splice(j + 1, 0, el)
            break;
        }
    }
}

function swapUs(array, i, j) {
    return [array[i], array[j]] = [array[j], array[i]]
}

console.log(sortMe)
