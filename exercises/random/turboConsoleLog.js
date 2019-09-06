/*
File to experiment with Turbo Console Log extension
https://egghead.io/lessons/vs-code-make-console-logging-in-vs-code-10x-easier-with-turbo-console-log

How to use:
1. DISPLAY LOG MESSAGE 
    - Select a variable and hit CTRL+ALT+L
    - also works with multiple variables selected

2. COMMENT ALL LOG MESSAGES
    SHIFT+ALT+C

3. UNCOMMENT ALL MESSAGES
    SHIFT+ALT+U

4. DELETE ALL MESSAGES
    SHIFT+ALT+D
    CTRL+Z will undo if you change your mind
*/

const number = 1;
const string = "I am a string";
const bool = false;
foo();

function foo() {
  // console.log("TCL: foo -> foo", foo);
  const bar = 1;
  // console.log("TCL: foo -> bar", bar);
  const baz = "yo";
  // console.log("TCL: foo -> baz", baz);
}
