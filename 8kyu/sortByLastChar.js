function last(x) {
    return x.split(' ').sort((a, b) => {
        if (a.slice(-1) < b.slice(-1)) return -1;
        if (a.slice(-1) > b.slice(-1)) return 1;
        return 0;
    })
}
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0