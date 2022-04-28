function divisors(integer) {
    let arr = []
    for (let i = 0; i < integer; i++) {
        if (integer % i == 0) {
            arr.push(i)
        }
    }
    arr.shift()
    return arr.length === 0 ? `${integer} is prime` : arr
};
//https://www.codewars.com/kata/544aed4c4a30184e960010f4