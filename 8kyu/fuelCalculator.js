function fuelPrice(litres, pricePerLitre) {
    for (let i = 2; i <= 10; i += 2) {
        if (i <= litres) pricePerLitre -= 0.05;
    }
    return Number((litres * pricePerLitre).toFixed(2));
}

//https://www.codewars.com/kata/57b58827d2a31c57720012e8