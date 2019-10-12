/*
    finding things in arrays can be a lot slower than looking them up in objects
    if we are dealing with lists with many items, consider converting the into objects for perf
*/

const reduceArrayToObject = arr =>
  arr.reduce((accum, curr) => {
    accum[curr.id] = curr;
    return accum;
  }, {});

const arrayBeings = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Lisa" },
  { id: 3, name: "Gabi" },
  { id: 4, name: "Savvy" },
  { id: 5, name: "Lola" }
];

const objBeings = reduceArrayToObject(arrayBeings);

console.log(objBeings);
