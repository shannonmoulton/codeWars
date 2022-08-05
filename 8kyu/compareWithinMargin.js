function closeCompare(a, b, margin) {
    return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b)
}
//https://www.codewars.com/kata/56453a12fcee9a6c4700009c