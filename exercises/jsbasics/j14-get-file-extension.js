
/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program that gets the extension from a filename

*/

const filename = "TAM Estimator.xlsx"
const anotherFile = "autoexec.bat"

const filenameExtension = filename.split('.')[1]
console.log(`Extension from filename is ${filenameExtension}.`)

const anotherFileExtension = anotherFile.split('.')[1]
console.log(`Extension from anotherFile is ${anotherFileExtension}.`)