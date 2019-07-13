/* 
Create a function that takes an integer and returns the ordinal indicator
*/

const englishOrdinalSuffixes = {
    'one': 'st',
    'two': 'nd',
    'few': 'rd',
    'other': 'th'
}

const suffixes = new Intl.PluralRules('en-US', { type: 'ordinal' })

// usage
suffixes.select(0)
// 'other' => we can look up th

suffixes.select(1)
// 'one' => we can look up st

suffixes.select(2)
// 'two' => we can look up nd

suffixes.select(3)
// 'few' => we can look up rd

suffixes.select(4)
// 'other' => we can look up th

suffixes.select(43)
// 'few' => we can look up rd

function suffixMe(int) {
    const suffixLookup = suffixes.select(int)
    const suffix = englishOrdinalSuffixes[suffixLookup]
    return `${int}${suffix}`
}

console.log(suffixMe(0))
console.log(suffixMe(1))
console.log(suffixMe(2))
console.log(suffixMe(3))
console.log(suffixMe(4))
console.log(suffixMe(11))
console.log(suffixMe(22))
console.log(suffixMe(43))