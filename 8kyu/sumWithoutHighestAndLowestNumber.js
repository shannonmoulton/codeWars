function sumArray(array) {
    if (array && array.length > 2) {
        array.sort((a, b) => a - b)
        array.shift()
        array.pop()
        let sum = array.reduce((a, b) => a + b)
        return sum
    } else {
        return 0
    }
}
//https://www.codewars.com/kata/576b93db1129fcf2200001e6