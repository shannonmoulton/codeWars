function slope(points) {
    let x1 = points[0], y1 = points[1], x2 = points[2], y2 = points[3], slope = (y2 - y1) / (x2 - x1)

    return x1 === x2 ? "undefined" : String(slope)
}

//https://www.codewars.com/kata/55a75e2d0803fea18f00009d