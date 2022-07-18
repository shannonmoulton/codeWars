function nextItem(xs, item) {
    let found = false
    let answer

    for (let element of xs) {
        if (found) {
            answer = element
            break
        }
        if (element === item) {
            found = true
        }
    }
    return answer
}

//https://www.codewars.com/kata/542ebbdb494db239f8000046