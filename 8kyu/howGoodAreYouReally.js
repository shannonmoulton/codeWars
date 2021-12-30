function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints
}
//https://www.codewars.com/kata/5601409514fc93442500010b