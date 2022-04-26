function factorial(n) {
    if (n < 0 || n > 12) {
        throw RangeError("The argument must be between 0 and 12.")
    }
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc