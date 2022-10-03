function changeMe(moneyIn) {
    console.log(moneyIn)
    switch (moneyIn) {
        case '£5': return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
            break;
        case '£2': return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
            break;
        case '£1': return "20p 20p 20p 20p 20p"
            break;
        case '50p': return "20p 20p 10p"
            break;
        case '20p': return "10p 10p"
            break;
        default: return moneyIn
    }
}

//https://www.codewars.com/kata/57238766214e4b04b8000011