function squareOrSquareRoot(array) {
    return array.map(x => {
        if (Number.isInteger(Math.sqrt(x))) {
            return Math.sqrt(x)
        } else {
            return Math.pow(x, 2)
        }
    })
}
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627