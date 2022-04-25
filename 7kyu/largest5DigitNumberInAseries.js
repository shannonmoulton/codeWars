function solution(digits) {
    let highest = 0

    for (let i = 0; i < digits.length; i++) {
        let comparer = Number(digits.substr(i, 5))
        if (comparer > highest) {
            highest = comparer
        }
    }
    return highest
}
// https://www.codewars.com/kata/51675d17e0c1bed195000001