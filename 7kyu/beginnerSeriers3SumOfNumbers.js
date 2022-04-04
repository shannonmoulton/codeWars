function getSum(a, b) {
    [a, b] = a > b ? [b, a] : [a, b];
    let arr = []
    if (a === b) {
        return a
    }

    for (let i = a; i < b + 1; i++) {
        arr.push(i)
    }
    return arr.reduce((a, b) => a + b)
}
//https://www.codewars.com/kata/55f2b110f61eb01779000053