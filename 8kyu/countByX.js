function countBy(x, n) {
    let z = [];
    let count = 0
    for (let i = 0; i < n; i++) {
        count += x
        z.push(count)
    }
    return z;
}
//https://www.codewars.com/kata/5513795bd3fafb56c200049e