function pointsPer48(ppg, mpg) {
    return ppg === 0 || mpg === 0 ? 0 : Number(((ppg / mpg) * 48).toFixed(1))
}

//https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
