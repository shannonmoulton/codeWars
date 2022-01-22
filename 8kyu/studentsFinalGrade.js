function finalGrade(exam, projects) {
    let grade
    exam > 90 || projects > 10 ? grade = 100
        : exam > 75 && projects >= 5 ? grade = 90
            : exam > 50 && projects >= 2 ? grade = 75
                : grade = 0
    return grade
}
//https://www.codewars.com/kata/5ad0d8356165e63c140014d4