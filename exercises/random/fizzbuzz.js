// write a function that accepts an array of integers and returns an array of objects
// for each integer in the array, set the key of the return object to the integer
// and the value to the fizzbuzz string
// any number divisible by 3 should be fizz
// any number divisible by 5 should be buzz
// and any number that is both fizz and buzz should be fizzbuzz

const startNum = 3
const endNum = 17
function range(start, stop) {
    // Array(n) creates an empty array of length n
    // .fill fills the empty array with the value start in each slot
    // .map creates a new array starting with start incrementing by 1 to the
    // end of the length of the array
    // this can be modified to accept a step parameter
    return Array(stop - start + 1).fill(start).map((start, runningTotal) => start + runningTotal)
}

const myArray = range(startNum, endNum)
const fizzBuzzed = fizzBuzz(myArray)

console.log(myArray)
console.log(fizzBuzzed)

// NOTE: The index and key will match if the range function is called with a start of 0
// get an object at a specified index
console.log(fizzBuzzed[10])

// get an object with the specified key
console.log(fizzBuzzed.find(x => x.key === 10))

// get all the fizz objects
console.log(fizzBuzzed.filter(x => x.value === "Fizz"))

function fizzBuzz(myArray) {
    return myArray.map(x => amISpecial(x))
}

function amISpecial(int) {
    let value = "Just an Int"
    if (isFizz(int)) value = "Fizz"
    if (isBuzz(int)) value = "Buzz"
    if (isFizzBuzz(int)) value = "FizzBuzz"
    return {
        key: int, value: value
    }
}

function isFizzBuzz(int) {
    return int % 15 === 0
}

function isFizz(int) {
    return int % 3 === 0
}

function isBuzz(int) {
    return int % 5 === 0
}