function drawStairs(n) {
    return [...Array(n)].map((_, index) => ' '.repeat(index) + 'I').join('\n')
}

//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5