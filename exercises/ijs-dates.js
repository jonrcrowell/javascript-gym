function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: ijs-dates.js");

/*
test('createDateString()', () => {
    assert.equal(createDateString(new Date(2077, 0, 27)), '2077-01-27');
    assert.equal(createDateString(new Date(324, 10, 1)), '0324-11-01');
  });

  Write a function createDateString that accepts a Date as an argument and returns a string
  in the 'YYYY-MM-DD' format. Days, months, and years must always have 4, 2, and 2 characters.
*/

function createDateString(date) {
  console.log(date);
  return date.toISOString().split("T")[0];
}
const dateString = createDateString(new Date(2077, 0, 27));
printThis(dateString);
const dateString2 = createDateString(new Date(324, 10, 1));
printThis(dateString2);
const today = createDateString(new Date(2019, 5, 28)); // June 28, 2019
printThis(today);
const myBirthday = createDateString(new Date(1968, 8, 18));
printThis(myBirthday);
