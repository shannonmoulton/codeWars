function uefaEuro2016(teams, scores) {
    return scores[0] === scores[1] ? `At match ${teams[0]} - ${teams[1]}, teams played draw.` : `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? teams[0] : teams[1]} won!`
}

//https://www.codewars.com/kata/57613fb1033d766171000d60