function points(games) {
    return games.reduce((a, b) => a + (b[0] > b[2] ? 3 : b[0] == b[2] ? 1 : 0), 0)
}
//https://www.codewars.com/kata/5bb904724c47249b10000131