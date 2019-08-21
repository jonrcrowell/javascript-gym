// use Quokka to see results in VS Code

/* 
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
    
    Write a JavaScript function to find longest substring in a given a string without repeating characters.
    shazbat
    shazbit
*/

const slide = "shazbitxyzam";
console.log(getLongestNonRepeatingSubstring(slide));

function getLongestNonRepeatingSubstring(str) {
  let maxFound = false;
  let maxUniqueString = "";

  for (let testLength = str.length; testLength > 1 && !maxFound; testLength--) {
    for (let i = 0; i + testLength <= str.length && !maxFound; i++) {
      const testString = str.substring(i, i + testLength);
      if (!doIHaveRepeatingCharacters(testString)) {
        maxUniqueString = testString;
        maxFound = true;
      }
    }
  }
  return maxUniqueString;
}

function doIHaveRepeatingCharacters(str) {
  let repeats = false;
  const letters = str.split("").sort();
  for (var letter of letters) {
    const instances = letters.filter(x => x === letter).length;
    if (instances > 1) {
      repeats = true;
      break;
    }
  }
  return repeats;
}
