var hotpo = function (n) {
    let counter = 0;
    if (n > 0 && Number.isInteger(n)) {
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
                counter++;
            } else if (n % 2 !== 0) {
                n = (n * 3) + 1;
                counter++;
            }
        }
        return counter;
    }
}

//https://www.codewars.com/kata/577a6e90d48e51c55e000217