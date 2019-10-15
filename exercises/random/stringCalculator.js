/*
    Test.assertEquals(calculate("1plus2plus3plus4"), '10');
    Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
	Test.assertEquals(calculate('1plus2plus3minus4'), '2');
*/

function calculate(str) {
  const symbols = str
    .replace(/plus/g, "+")
    .replace(/minus/g, "-")
    .split("");

  let total = parseInt(symbols[0]);

  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === "+") {
      total = total + parseInt(symbols[i + 1]);
    }
    if (symbols[i] === "-") {
      total = total - parseInt(symbols[i + 1]);
    }
  }
  return total;
}

console.log(calculate("1plus2plus3minus4"));
