function sumTwoSmallestNumbers(numbers) {
    let arrNums = Array.from(numbers)
    arrNums.sort((a, b) => a - b)
    return arrNums[0] + arrNums[1]
}
//https://www.codewars.com/kata/558fc85d8fd1938afb000014