function arrayMadness(a, b) {
    let squares = a.map(element => element ** 2)
    let cubes = b.map(element => element ** 3)

    return squares.reduce((a, b) => a + b) > cubes.reduce((a, b) => a + b)
}

//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1