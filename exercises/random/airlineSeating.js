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

module.exports = airlineSeating;
