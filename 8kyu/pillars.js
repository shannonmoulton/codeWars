function pillars(num_pill, dist, width) {
    if (num_pill <= 1) {
        return 0
    } else {
        let totalWidth = (num_pill - 2) * width
        let totalDistance = (num_pill - 1) * dist * 100
        return totalWidth + totalDistance
    }
}
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d