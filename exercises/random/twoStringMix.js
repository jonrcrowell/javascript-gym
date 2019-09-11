/*
Given two strings s1 and s2, we want to visualize how different the two strings are. 
We will only take into account the lowercase letters (a to z). 
First let us count the frequency of each lowercase letters in s1 and s2.

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2.
Only include letters that occur at least twice.

We can describe the differences between s1 and s2 in the following string: 
"1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. 
In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times 
as its maximum if this maximum is strictly greater than 1; 
these letters will be prefixed by the number of the string where 
they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) 
will be in decreasing order of their length and when they have the same length sorted in 
ascending lexicographic order (letters and digits - more precisely sorted by codepoint); 
the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
*/

const s1 = "Are the kids at home? aaaaa fffff";
const s2 = "Yes they are here! aaaaa fffff";

console.log("TCL: mixMyStrings(s1, s2)", mixMyStrings(s1, s2));

console.log("codepoint for letter m is ", "m".codePointAt(0));
console.log("codepoint for letter t is ", "t".codePointAt(0));
console.log("codepoint for letter r is ", "r".codePointAt(0));
console.log("codepoint for letter h is ", "h".codePointAt(0));

function mixMyStrings(string1, string2) {
  const lc1 = string1.replace(/[^a-z]/g, "").split("");
  const lc2 = string2.replace(/[^a-z]/g, "").split("");
  const s1Counts = countLetters(lc1);
  const s2Counts = countLetters(lc2);

  // I have the letters counted

  // now I have to figure out how to create a string out of both objects

  return lc1 + lc2;
}

function countLetters(string) {
  const counts = {};
  string.map(x => {
    counts[x] = counts[x] ? counts[x] + 1 : 1;
  });

  return counts;
}
