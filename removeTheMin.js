function removeSmallest(numbers) {
    let result = numbers.slice(0)
    result.splice(numbers.indexOf(Math.min(...numbers)), 1)
    return result
}

//https://www.codewars.com/kata/563cf89eb4747c5fb100001b