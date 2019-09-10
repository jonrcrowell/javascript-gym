/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
*/

const inviteList =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(inviteList));
console.log(meeting2(inviteList));

function meeting(invited) {
  let sortedList = "";
  invited
    .toUpperCase()
    .split(";")
    .map(x => x.split(":"))
    .map(x => {
      return {
        firstName: x[0],
        lastName: x[1],
        inviteName: `(${x[1]}, ${x[0]})`
      };
    })
    .sort(function(name1, name2) {
      // sort by last name
      if (name1.lastName > name2.lastName) return 1;
      if (name1.lastName < name2.lastName) return -1;
      // sort by first name
      if (name1.firstName > name2.firstName) return 1;
      if (name1.firstName < name2.firstName) return -1;
    })
    .map(x => {
      sortedList = `${sortedList}${x.inviteName}`;
    });

  return sortedList;
}

// much terser functional answer
function meeting2(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map(x =>
      x
        .split(":")
        .reverse()
        .join(", ")
    )
    .sort() // of course! I don't need to sort by both last and first name
    .join(")(");
  return "(" + string + ")";
}
