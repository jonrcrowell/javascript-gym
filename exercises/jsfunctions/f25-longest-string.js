// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
    Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"
*/

const countryArray = ["Australia", "Germany", "United States of America"]
console.log(countryArray[0].length)

let longest = 0;

countryArray.forEach(function (x) {
    if (x.length > longest) {
        longest = x.length
    }
})

console.log(countryArray.filter(x => x.length === longest))