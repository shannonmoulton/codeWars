const sequenceSum = (begin, end, step) => {
    let sum = 0
    for (let i = begin; i < end + 1; i = i + step) {
        sum = i + sum
    }
    return sum
};
//https://www.codewars.com/kata/586f6741c66d18c22800010a