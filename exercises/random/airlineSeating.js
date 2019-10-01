/*
For seats = ['f', 'f', 'f', 'c', 'c', 'c'], premium = 2, and standard = 5

the output should be ['p', 'p', 's', 's', 's', 's']

["f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f"],5,5),
["p",  "p",  "p",  "p",  "p",  "s",  "s",  "s",  "s",  "s",  " "])

Test.assertDeepEquals(airlineSeating(["f",  "f",  "f",  "c",  "c"],1,1),
                                     ["p",  " ",  " ",  "s",  " "])
*/

const seats = ["f", "f", "f", "f", "f", "c", "c", "c", "c"];

const p = 1;
const s = 5;

console.log(airlineSeating(seats, p, s));

function airlineSeating(seats, premium, standard) {
  let seating = seats.join("");
  const numCoachSeats = seats.filter(x => x === "c").length;
  let premiumSeats = "p".repeat(premium);
  seating = premiumSeats + seating.slice(premium);

  for (let i = 1; i <= standard; i++) {
    seating =
      i <= numCoachSeats
        ? seating.replace(/c/, "s")
        : seating.replace(/f/, "s");
  }
  return seating.replace(/f|c/g, " ").split("");
}

function airlineSeatingArray(seats, premium, standard) {
  const premiumPassengers = Array(premium).fill("p");
  const standardPassengers = Array(standard).fill("s");
  let seating = [...premiumPassengers, ...seats.slice(premium)];
  const coachSeatCount = seats.filter(seat => seat === "c").length;

  // fill up coach seats
  standardPassengers.forEach(standard => {
    const coachSeat = seating.findIndex(seat => seat === "c");
    seating[coachSeat] = "s";
  });

  // fill up empty first-class seats if needed
  standardPassengers.slice(coachSeatCount).forEach(standard => {
    const upgradeSeat = seating.findIndex(seat => seat === "f");
    seating[upgradeSeat] = "s";
  });

  const manifest = seating.map(seat => {
    if (seat === "f" || seat === "c") return " ";
    return seat;
  });
  return manifest;
}
