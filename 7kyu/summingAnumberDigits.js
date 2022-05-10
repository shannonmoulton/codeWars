function sumDigits(number) {
    number = Math.abs(number)
    let arr = String(number).split('')
    arr = arr.map(str => Number(str))
    return arr.reduce((a, b) => a + b)
}
//https://www.codewars.com/kata/52f3149496de55aded000410