function openOrSenior(data) {
    let arr = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7 && data[i][1] < 27) {
            arr.push('Senior')
        } else {
            arr.push('Open')
        }
    }
    return arr
}
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa