function calculator(a, b, sign) {
    let answer = 0

    switch (sign) {
        case "+": answer = a + b;
            break;
        case "-": answer = a - b;
            break;
        case "*": answer = a * b;
            break;
        case "/": answer = a / b;
            break;
        default: answer = "unknown value"
    }

    return answer
}

//https://www.codewars.com/kata/5810085c533d69f4980001cf