function splitTheBill(x) {
    let total = 0,
        count = 0
    for (let i in x) {
        count++
        total += x[i]
    }
    let average = total / count
    for (let i in x) {
        x[i] = +(x[i] - average).toFixed(2)
    }
    return x
}

//https://www.codewars.com/kata/5641275f07335295f10000d0