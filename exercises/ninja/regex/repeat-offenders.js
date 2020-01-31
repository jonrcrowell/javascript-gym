/*
    Optional character (it can appear once or not at all)
    - follow it with a ?
    - e.g. /t?est/ matches both test and est

    One or many
    - follow it with a +
    - e.g. /t+est/ matches test, ttest, ttttest, but not est

    Zero, one or many
    - follow it with an *
    - e.g. /t*est/ matches test, ttest, ttttest and est

    Fixed number of reps
    - number of reps in braces
    - e.g. /a{4}/ matches aaaa

    Range of reps
    - min and max in braces separated by comma
    - e.g. /a{4,7}/ matches aaaa, aaaaa, aaaaaa, aaaaaaa

    Open ended range
    - same as range without a max after the comma (* do not leave an empty space!)
    - e.g /a{4,}/ matches any group of 4 or more consecutive "a"s
    - * /a{4,}/ will work but /a{4, }/ won't

    By default, all of these are greedy
    - greedy = they will consume all possible characters that make up a match
    - non-greedy = they will consume only enough characters to make a match
*/

const greedyEyes = "iiiiiii".match(/i+/); // matches all consecutive i's
const nonGreedyEyes = "iiiiiii".match(/i+?/); // matches the first i
console.log(greedyEyes);
console.log(nonGreedyEyes);

const greedyFourA = "aaaaaaa".match(/a{4,}/); // matches all consecutive a's
const nonGreedyFourA = "aaaaaaa".match(/a{4,}?/); // matches the first 4 consecutive a's
console.log(greedyFourA);
console.log(nonGreedyFourA);
