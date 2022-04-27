function getDivisorsCnt(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i)
        }
    }
    return arr.length
}
//https://www.codewars.com/kata/542c0f198e077084c0000c2e