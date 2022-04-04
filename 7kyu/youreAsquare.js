var isSquare = function (n) {
    let sr = Math.sqrt(n)
    if (sr * sr === n && Number.isInteger(sr)) {
        return true
    } else {
        return false;
    }
}
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e