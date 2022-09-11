function periodIsLate(last, today, cycleLength) {
    let daysPassed = Math.floor((today - last) / 86400000)
    return daysPassed > cycleLength
}

//https://www.codewars.com/kata/578a8a01e9fd1549e50001f1