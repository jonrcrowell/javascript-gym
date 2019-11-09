// const RichEntries = Entries.map(x => {...x})

function calculateScore(scores) {
  const validScores = scores
    .map(x => x.replace("+", ""))
    .map(x => (x === "E" ? 0 : parseInt(x)))
    .filter(x => !isNaN(x))
    .sort((a, b) => a - b)
    .slice(0, 3);
  return validScores.length === 3 ? validScores.reduce((a, b) => a + b) : "MC";
}

const list = ["-3", "CUT", "+2", "CUT", "+22"];

console.log(calculateScore(list));
