const sumAverage = (arr) => {
    let result;
    result = arr.map(e => e.reduce((a, b) => a + b, 0) / e.length)
    result = Math.floor(result.reduce((a, b) => a + b, 0))
    return result;
}
//https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript