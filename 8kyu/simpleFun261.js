function whoseMove(lastPlayer, win) {
    return lastPlayer === "black" && win === false ? "white" : lastPlayer === "white" && win === true ? "white" : "black"
}

//https://www.codewars.com/kata/59126992f9f87fd31600009b