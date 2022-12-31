function makeClass(...properties) {
    return function (...values) {
        properties.forEach((property, i) => this[property] = values[i])
    }
}

//https://www.codewars.com/kata/5d774cfde98179002a7cb3c8