function dutyFree(normPrice, discount, hol) {
    let afterDiscount, answer
    afterDiscount = (normPrice * discount) / 100
    answer = hol / afterDiscount
    return Math.floor(answer)
}
//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5