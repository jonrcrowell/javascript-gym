/*
    The digits before (including) 5, letters of the first row before (including) t, 
    letters of the second row before (including) g and letters of the third row 
    before (including) b are typed with left hand, 
    the other digits and numbers are typed with right hand.
    
    Space is typed with left hand if the non-space char you typed before was typed with right one, and vice versa. 
    If it is the first char, it's typed with left hand.

    Every string you're given is a correct string which includes only digits, lowercase letters and spaces. Strings need not be validated.

    (touchType('i love programming'), 'RLRRLLRRLRLLLRRRRL', 'Should work for the description examples')
    (touchType('  two spaces'), 'LLLLRLLRLLLL', 'Should work for the description examples')
*/

const typeThis = "8 800 555 35 35"; // RLRRRLLLLRLLRLL
// [12345qwertasdfgzxcvb]

const touchType = string => {
  let typed = string.replace(/[12345qwertasdfgzxcvb]/g, "L");
  typed = typed.replace(/[0-9a-z]/g, "R");
  let spaceHand = "L";
  typed = typed
    .split("")
    .map(x => {
      x === " "
        ? (x = spaceHand)
        : x === "L"
        ? (spaceHand = "R")
        : (spaceHand = "L");
      return x;
    })
    .join("");
  return typed;
};

console.log(touchType(typeThis));
