function gimme(triplet) {
    let copyOftriplet = [...triplet]
    let sorted = copyOftriplet.sort((a, b) => a - b)
    return triplet.indexOf(sorted[1])
}
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755