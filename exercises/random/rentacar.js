/*
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
*/
function rentalCarCost(days) {
  const daily = days * 40;
  const weeks = Math.floor(days / 7);
  const threedays = Math.floor((days - weeks * 7) / 3);
  return daily - weeks * 50 - threedays * 20;
}

console.log(rentalCarCost(6));
