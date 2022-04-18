var number = function (busStops) {
    let firstItem = busStops.map(arr => arr[0]).reduce((previousValue, currentValue) => previousValue + currentValue)
    let secondItem = busStops.map(arr => arr[1]).reduce((previousValue, currentValue) => previousValue + currentValue)
    return firstItem - secondItem
}
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099