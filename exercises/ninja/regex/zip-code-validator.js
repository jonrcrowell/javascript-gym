const zip1 = "75248-9949";
const zip2 = "s2343-2322";

const isThisAZipCode = candidate => /^\d{5}-\d{4}$/.test(candidate);

console.log(isThisAZipCode(zip1));
console.log(isThisAZipCode(zip2));

const isThisAPhoneNumber = candidate =>
  /^\(\d{3}\) \d{3}-\d{4}$/.test(candidate);

console.log(isThisAPhoneNumber("(214) 458-5842"));
