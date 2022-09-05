function twoHighest(arr) {
    return arr
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((a, b) => b - a)
        .slice(0, 2);
}

//https://www.codewars.com/kata/57ab3c09bb994429df000a4a