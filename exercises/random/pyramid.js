/*
Return a pyramid array for the given number
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
*/

const pyramid = levels => {
  const pyramidArray = [];
  if (levels === 0) return pyramidArray;
  for (let i = 1; i <= levels; i++) {
    pyramidArray.push(Array(i).fill(1));
  }
  return pyramidArray;
};

pyramid(0);
pyramid(1);
pyramid(2);
pyramid(3);
