/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.

zi ozumpv wq
Expected: '**********\n* iz     *\n* vpmuzo *\n* qw     *\n**********', instead got: '**********\n* iz *\n* vpmuzo *\n* qw *\n**********'
*/

const message = "zi ozumpv wq";

console.log(mirror(message));

function mirror(text) {
  let words = text.split(" ").map(x =>
    x
      .split("")
      .reverse()
      .join("")
  );

  const max = Math.max(...words.map(word => word.length));
  words = words.map(x => `* ${x}${" ".repeat(max - x.length)} *`);
  words.push("*".repeat(max + 4));
  words.unshift("*".repeat(max + 4));
  return words.join("\n");
}
