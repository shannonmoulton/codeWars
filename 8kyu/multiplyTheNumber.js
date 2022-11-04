function multiply(number) {
    let count = number.toString().replace("-", '')

    return number * Math.pow(5, count.length)
}
//https://www.codewars.com/kata/5708f682c69b48047b000e07