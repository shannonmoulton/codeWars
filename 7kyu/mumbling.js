function accum(s) {
    let count = 0
    return s.toLowerCase().split('').map(e => e.toUpperCase() + e.repeat(count++)).join('-')
}
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039