/* 
Create a for loop that iterates through an array 
and returns the sum of the elements of the array.
*/

function range(start, stop) {
    return Array(stop - start + 1)
        .fill(start)
        .map((start, runningTotal) => start + runningTotal)
}

const addMeUp = range(1700, 2650)

const arrayTotal = addMeUp.reduce((x, y) => x + y)

console.log(`Adding all elements of the array 
gives me a grand total of: ${new Intl.NumberFormat().format(arrayTotal)}.`)
console.log(addMeUp)
