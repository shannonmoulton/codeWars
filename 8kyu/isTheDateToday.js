function isToday(date) {
    let today = new Date

    return date.toLocaleDateString() === today.toLocaleDateString()
}

//https://www.codewars.com/kata/563c13853b07a8f17c000022