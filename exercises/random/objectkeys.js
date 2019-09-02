const myObj = {
  name: "homer",
  lname: "simpson",
  job: "programmer",
  favoriteBeer: "Duffs",
  favoriteFood: "Nachos"
};

for (const key of Object.keys(myObj)) {
  console.log(key);
}

// array is also an object
const myArr = ["George", "Sally", "Bill", "Bambi", "Natasha"];

for (const key of Object.keys(myArr)) {
  console.log(key);
}

// a map is a fairly new construct that behaves a little differently
// it is also an object
const myMap = new Map()
  .set("name", "Marge")
  .set("lname", "Simpson")
  .set("hasKids", true);

for (const key of myMap.keys()) {
  console.log(key);
}

// spread map to an array
const mapArrayKeys = [...myMap.keys()];
console.log(`mapArrayKeys is ${mapArrayKeys}`);
const mapArrayValues = [...myMap.values()];
console.log(`mapArrayValues is ${mapArrayValues}`);

// iterate through the entries of a map
for (const entry of myMap.entries()) {
  console.log(`Entry! ${entry}`);
}
