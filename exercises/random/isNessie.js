/* determine if string contains any of several substrings

 look for "tree fiddy", "three fifty", or "3.50"

console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
*/

const sentence =
  "Your girlscout cookies are ready to ship. Your crookies total comes to tree fiddy";

function containsVariant(text) {
  return (
    text.toLowerCase().includes("tree fiddy") ||
    text.toLowerCase("three fifty").includes() ||
    text.toLowerCase("3.50").includes()
  );
}

const isLockNessMonster = s => /tree fiddy|three fifty|3.50/.test(s); // regexp test with "or" conditions

console.log(containsVariant(sentence));

console.log(isLockNessMonster(sentence));

const cookieShip = s => /cookies.*ship/.test(s); // finds both "cookies" and "ship" in that order

console.log(cookieShip(sentence));

const cookieShipWherever = s => /cookies.*ship|ship.*cookies/.test(s); // finds both and checks either order, would be impractical for a list of terms
// .* looks ahead for the next match

console.log(cookieShipWherever(sentence));
