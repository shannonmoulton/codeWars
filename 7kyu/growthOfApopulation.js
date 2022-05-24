function nbYear(p0, percent, aug, p, count = 0) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += p0 * (percent / 100) + aug;
    }
    return years;
}

function nbYear(p0, percent, aug, p, years = 0) {
    return p0 >= p
        ? years
        : nbYear(
            Math.floor(p0 + p0 * (percent / 100)) + aug,
            percent,
            aug,
            p,
            years + 1
        );

}
//https://www.codewars.com/kata/563b662a59afc2b5120000c6