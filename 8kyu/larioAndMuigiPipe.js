function pipeFix(numbers) {
    let result = []
    let min = numbers[0]
    let max = numbers[numbers.length - 1]

    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result
}
//https://www.codewars.com/kata/56b29582461215098d00000f