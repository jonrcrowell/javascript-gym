/*
For seats = ['f', 'f', 'f', 'c', 'c', 'c'], premium = 2, and standard = 5

the output should be ['p', 'p', 's', 's', 's', 's']

["f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f",  "f"],5,5),
["p",  "p",  "p",  "p",  "p",  "s",  "s",  "s",  "s",  "s",  " "])

Test.assertDeepEquals(airlineSeating(["f",  "f",  "f",  "c",  "c"],1,1),
                                     ["p",  " ",  " ",  "s",  " "])
*/

const seats = ["f", "f", "f", "c", "c"];

const p = 1;
const s = 3;

console.log(airlineSeating(seats, p, s));

function airlineSeating(seats, premium, standard) {
  const firstclassSeats = seats.filter(x => x === "f").length;
  const coachSeats = seats.length - firstclassSeats;
  const extraCoach = standard - coachSeats;
  // if there are enough coach seats, seat them there
  const coachStart = coachSeats >= standard ? firstclassSeats : premium;

  let seating = [...seats].fill("");

  for (let i = 0; i < premium; i++) {
    seating[i] = "p";
  }

  // we have to fill up coach first, then start moving coach customers to first class
  for (let i = 0; i < standard; i++) {
    seating[i + coachStart] = "s";
  }
  if (seating.length > seats.length) {
    return seating.slice(0, seats.length);
  }
  return seating;
}
