var sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
];

function countSheep(A) {
  return A.filter(x => x === true).length;
}

console.log(countSheep(sheep));
