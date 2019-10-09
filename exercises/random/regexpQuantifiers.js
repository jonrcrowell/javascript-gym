/*
Quantifiers
? - zero or one time
* - zero or more times
+ - one or more times
*/

const doggies = `dog and doge`;
const beeper = `beep bp beeeeeeeeeeeeeeep`;

console.log(doggies.replace(/doge?/g, `DOGE`));

console.log(beeper.replace(/be*p/g, `BEEP`));

console.log(beeper.replace(/be+p/g, `BEEP`));

hello | ciao | salut | hallo | hola | ahoj | czesc;
