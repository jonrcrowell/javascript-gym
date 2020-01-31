const zip1 = "75248-9949";
const zip2 = "s2343-2322";

const isValidZip = input => /^\d{5}-\d{4}$/.test(input);

console.log(isValidZip(zip1));
console.log(isValidZip(zip2));
