function bloodAlcoholContent(drinks, weight, sex, time) {
    let bac = drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) - .015 * time
    return +bac.toFixed(4);
}

//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8