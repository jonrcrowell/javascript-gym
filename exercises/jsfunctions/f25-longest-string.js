// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
    Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"
*/

const countryArray = ["Australia", "Germany", "United States of America", "Peru"]
console.log(getLongestString(countryArray))
console.log(sortByLength(countryArray))
console.log(`Longest string in array after sorting is ${sortByLength(countryArray)[0]}`)

function getLongestString(arr) {
    let longest = 0;

    arr.forEach(function (x) {
        if (x.length > longest) {
            longest = x.length
        }
    })

    return (arr.filter(x => x.length === longest))
}

function sortByLength(arr) {
    return arr.sort((a, b) => (b.length - a.length))
}
