function getAge(inputString) {
    let arr = inputString.split('')
    return parseInt(arr.filter(n => parseInt(n) == n))
}

//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1