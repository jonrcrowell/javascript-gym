/*
'man i need a taxi up to ubud', 'taxi'
'what time are we climbing up the volcano', 'volcano'
'take me to semynak', 'semynak'
*/

const maxTest = [0, 1, 3, 17, 4, 9, 17, 12];

console.log(maxTest.indexOf(Math.max(...maxTest)));

// indexOf gives me the index of the first match (or -1 if no match)

const words = "man i need a taxi up to ubud";

function mvw(string) {
  const letterValue = x => x.charCodeAt(0) - 96;
  const totalValue = x => {
    const total = x.split("").map(letterValue);
    return total.reduce((a, b) => a + b, 0);
  };
  const words = string.split(" ");
  const values = words.map(totalValue);
  return words[values.indexOf(Math.max(...values))];
}

console.log(mvw(words));
