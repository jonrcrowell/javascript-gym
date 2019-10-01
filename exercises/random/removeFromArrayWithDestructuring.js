const array = [...Array(10).keys()];
console.log(array);

const [, , ...array2] = array; // destructure with a comma for each element we want to remove
console.log(array2);
