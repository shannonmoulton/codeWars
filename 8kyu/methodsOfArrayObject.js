function bigToSmall(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    return result.sort((a, b) => b - a).join('>')
}

//https://www.codewars.com/kata/5731861d05d14d6f50000626