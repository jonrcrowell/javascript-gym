var Ghost = function() {
  const colors = {
    1: "white",
    2: "yellow",
    3: "purple",
    4: "red"
  };
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  const ghost = colors[getRandomIntInclusive(1, 4)];
  return ghost;
};

console.log(Ghost());
