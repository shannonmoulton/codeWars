function numberToPower(number, power) {
    let result = 1
    for (let i = 0; i < power; i++) {
        result = result * number
    }
    return result
}

//https://www.codewars.com/kata/562926c855ca9fdc4800005b