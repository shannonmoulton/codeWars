function fiveLine(s) {
    s = s.trim()
    let result = s.trim();
    for (let i = 2; i < 6; i++) {
        result = `${result}\n${s.repeat(i)}`
    }
    return result
}

//https://www.codewars.com/kata/5729b103dd8bac11a900119e