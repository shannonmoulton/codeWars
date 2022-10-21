function arr2bin(arr) {
    let sum = arr.reduce((a, b) => a + (typeof b == 'number' ? b : 0), 0)
    return sum === null ? '0' : sum.toString(2)
}

//https://www.codewars.com/kata/57642a90dee2da8dd3000161