function howMuchWater(water, load, clothes) {
    if (clothes > 2 * load) {
        return 'Too much clothes'
    }

    if (clothes < load) {
        return 'Not enough clothes'
    }
    return Number((water * 1.1 ** (clothes - load)).toFixed(2))
}
//https://www.codewars.com/kata/575fa9afee048b293e000287