function getMiddle(s) {
    if (s.length % 2 != 0) {
        return s.substr([s.length / 2], 1)
    }
    if (s.length % 2 === 0) {
        return s.substr([s.length / 2 - 1], 2)
    }
}

//https://www.codewars.com/kata/56747fd5cb988479af000028