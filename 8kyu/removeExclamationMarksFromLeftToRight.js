function remove(s, n) {
    while (n) {
        s = s.replace(/!/, "");
        n -= 1;
    }
    return s;
}

//https://www.codewars.com/kata/57faf7275c991027af000679