function findNextSquare(sq) {
    let sr = Math.sqrt(sq)
    return Number.isInteger(Math.pow(sr + 1, 2)) ? Math.pow(sr + 1, 2) : -1
}
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013