function findDifference(a, b) {
    return Math.abs((a.reduce((a, b) => a * b)) - (b.reduce((a, b) => a * b)))
}
//https://www.codewars.com/kata/58cb43f4256836ed95000f97