// Destructuring and default values tricks

function getUserInfo({
    // runtime arg validation
    firstName = requiredArg('firstName'),

    // regular default value
    lastName = '',

    // default value based on other destructured values
    fullName = `${firstName} ${lastName}`.trim(),
} = {}) {
    // in the function you know:
    // 1. firstName is provided
    // 2. lastName is either provided or an empty string
    // 3. fullName is either provided or the combo of firstName and lastName

    // Thank you destructuring!
    return { firstName, lastName, fullName }
}

function requiredArg(argName) {
    throw new Error(`${argName} is required.`)
}

console.log(getUserInfo({ firstName: 'Julie' }))
// -> {firstName: 'Julie', lastName: '', fullName: 'Julie'}

console.log(getUserInfo({ firstName: 'Julie', lastName: 'Doe' }))
// -> {firstName: 'Julie', lastName: 'Doe', fullName: 'Julie Doe'}

console.log(getUserInfo({ firstName: 'Julie', lastName: 'Doe', fullName: 'Julie A. Doe' }))
// -> {firstName: 'Julie', lastName: 'Doe', fullName: 'Julie A. Doe'}

console.log(getUserInfo())
// -> Error: firstName is required.