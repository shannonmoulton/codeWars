function isValid(formula) {
    return !(formula.includes(1) && formula.includes(2))
        && !(formula.includes(3) && formula.includes(4))
        && (formula.includes(5) == formula.includes(6))
        && (formula.includes(7) || formula.includes(8))
}

//https://www.codewars.com/kata/59c8b38423dacc7d95000008