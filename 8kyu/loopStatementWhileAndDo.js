function padIt(str, n) {
    let pad = "*";

    do {
        if (n % 2) {
            str = pad + str
        } else {
            str = str + pad
        }
        n--
    } while (n > 0)
    return str;
}

//https://www.codewars.com/kata/57216d4bcdd71175d6000560