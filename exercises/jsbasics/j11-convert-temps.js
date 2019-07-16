const exercise = document.getElementById('exercise')
const exNode = exercise.childNodes[0]
const thisFile = 'jsbasic-11.js'
exNode.data = thisFile

/*
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
  [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
  Expected Output : 
  60°C is 140 °F
  45°F is 7.222222222222222°C

*/

const tempAndMetric = prompt("Enter a temperature followed by either f (for Fahrenheit) or c (for Celcius). I will convert it for you.")
const baseTemp = tempAndMetric.substring(0, tempAndMetric.length - 1)
const baseMetric = tempAndMetric[tempAndMetric.length - 1].toLowerCase()

console.log(baseTemp)
console.log(baseMetric)
baseMetric === "f"
  ? console.log(convertFahrenheitToCelsius(baseTemp))
  : console.log(convertCelsiusToFahrenheit(baseTemp))

function convertCelsiusToFahrenheit(tempCelsius) {
  const tempFahrenheit = ((tempCelsius / 5) * 9) + 32
  return tempFahrenheit;
}

function convertFahrenheitToCelsius(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) / 9 * 5
  return tempCelsius;
}