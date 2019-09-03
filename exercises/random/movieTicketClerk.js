/*
The new "Avengers" movie has just been released! 
There are a lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollars bill. 
An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. 
He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change 
if he initially has no money and sells the tickets strictly 
in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person 
and give the change with the bills he has at hand at that moment. 
Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 7
*/
const tickets = [25, 25, 100];

console.log(canVasyaMakeChange(tickets));

function canVasyaMakeChange(peopleInLine) {
  let bank25 = 0;
  let bank50 = 0;
  let canMakeChange = true;

  for (let money of peopleInLine) {
    switch (money) {
      case 25:
        bank25 += 25;
        break;
      case 50:
        bank25 -= 25;
        bank50 += 50;
        break;
      case 100:
        bank50 > 0 ? ((bank50 -= 50), (bank25 -= 25)) : (bank25 -= 75);
        break;
    }
    if (canMakeChange) {
      if (bank25 < 0) {
        canMakeChange = false;
      }
    }
  }

  return canMakeChange ? "YES" : "NO";
}
