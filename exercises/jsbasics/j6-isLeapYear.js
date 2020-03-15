function isLeapYear(year) {
  const divBy4 = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;

  if (!divBy4) {
    return false;
  }

  if (divBy100 && !divBy400) {
    return false;
  }

  return true;
}

module.exports = isLeapYear;
