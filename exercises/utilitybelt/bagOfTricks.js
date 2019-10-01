const today = new Date().toISOString().split("T")[0]; //yyyy-mm-dd  2019-09-18
const todayString = new Date().toDateString();
const todayLocaleString = new Date().toLocaleDateString();

console.log(today); // yyyy-mm-dd 2019-09-23
console.log(todayString); // Mon Sep 23 2019
console.log(todayLocaleString); // 9/23/2019
