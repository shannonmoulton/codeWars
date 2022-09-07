function whatNumberIsIt(n) {
    return `Input number is ${n === Number.MAX_VALUE ? "Number.MAX_VALUE" : n === Number.MIN_VALUE ? "Number.MIN_VALUE" : Number.isNaN(n) ? "Number.NaN" : n === Number.NEGATIVE_INFINITY ? "Number.NEGATIVE_INFINITY" : n === Number.POSITIVE_INFINITY ? "Number.POSITIVE_INFINITY" : n}`
}

//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f