// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that returns array elements larger than a number.
    
    [0, 1, 3, 17, 45, 93, 91, 128, 8]
    [0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8]
*/

const filterValue = 10
const filterHigher = true
const filterThis = [0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8, 'shazbat', 0, 1, 3, 17, 45, 93, 91, 128, 8, 0, 1, 3, 17, 45, 93, 91, 128, 8]

console.log(
  filterHigher ?
    filterThis.filter(x => x > filterValue) :
    filterThis.filter(x => x < filterValue)
)