function startingMark(bodyHeight) {
    let meters = (10.67 - 9.45) / (1.83 - 1.52);
    return Math.round((10.67 + meters * bodyHeight - meters * 1.83) * 100) / 100;
}

//https://www.codewars.com/kata/5786f8404c4709148f0006bf