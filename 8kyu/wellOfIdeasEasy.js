function well(x) {
    let goodCount = x.filter(e => e === 'good').length
    if (goodCount === 0) {
        return 'Fail!'
    } else if (goodCount <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}
// https://www.codewars.com/kata/57f222ce69e09c3630000212