function roundIt(n) {
    let string = String(n)
    let decimal = String(n).split('').indexOf('.')
    let left = string.slice(0, decimal)
    let right = string.slice(decimal + 1, string.length + 1)

    return left.length < right.length ? Math.ceil(n) : right.length < left.length ? Math.floor(n) : Math.round(n)
}

//https://www.codewars.com/kata/5732d3c9791aafb0e4001236