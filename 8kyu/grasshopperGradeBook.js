function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    return 90 <= score ? 'A'
        : 80 <= score ? 'B'
            : 70 <= score ? 'C'
                : 60 <= score ? 'D'
                    : 'F'
}
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5