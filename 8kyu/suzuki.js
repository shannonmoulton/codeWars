function stairsIn20(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += s[i].reduce((a, b) => a + b);
    }
    return count * 20
}

//https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e