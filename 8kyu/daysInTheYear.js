function yearDays(year) {
    let days = 365
    if (year % 4 !== 0) {
        return `${year} has ${days} days`
    } if (year % 100 !== 0) {
        return `${year} has 366 days`
    } if (year % 400 !== 0) {
        return `${year} has ${days} days`
    }
    return `${year} has 366 days`

}

//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f