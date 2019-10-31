function distinctDigitYear(year) {
  do {
    year++;
  } while (new Set(year.toString()).size < 4);

  return year;
}

console.log(distinctDigitYear(1987));
