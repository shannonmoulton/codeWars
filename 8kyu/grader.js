function grader(score) {
    return score > 1 || score < 0.6 ? "F"
        : score >= 0.9 ? "A"
            : score >= 0.8 ? "B"
                : score >= 0.7 ? "C"
                    : "D"
}

//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c