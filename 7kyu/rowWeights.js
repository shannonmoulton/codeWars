function rowWeights(array) {
    let team1 = 0
    let team2 = 0

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            team1 += array[i]
        } else {
            team2 += array[i]
        }
    }
    return [team1, team2]
}
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9