function mxdiflg(a1, a2) {
    let arr = []
    if (a1.length === 0 || a2.length === 0) {
        return -1
    }
    for (let i = 0; i < a1.length; i++) {
        let x = a1[i]
        for (let j = 0; j < a2.length; j++) {
            let y = a2[j]
            console.log(x.length, y.length)
            arr.push(Math.abs(x.length - y.length))
        }

    }
    return Math.max(...arr)
}
//https://www.codewars.com/kata/5663f5305102699bad000056