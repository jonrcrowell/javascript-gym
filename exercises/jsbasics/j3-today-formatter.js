function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsbasic-3.js");

/* 
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
  
  Write a JavaScript program to get the current date.  Go to the editor
  Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const today = new Date().toISOString().split("T")[0];

printThis(today);
