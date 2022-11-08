function parseF(s) {
    let number = /[0-9]/
    return number.test(s) ? parseFloat(s) : null
}

//https://www.codewars.com/kata/57a386117cb1f31890000039