// determine if a date is today

// getDate() and setDate()

let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(today);
console.log(tomorrow);
console.log(yesterday);

console.log(tomorrow.toISOString().split("T")[0]);

console.log(
  new Date().toISOString().split("T")[0] ===
    tomorrow.toISOString().split("T")[0]
);

console.log(today.toDateString());
