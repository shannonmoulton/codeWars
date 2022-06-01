function combat(health, damage) {
    let newHealth = health - damage
    return newHealth > 0 ? newHealth : 0
}
//https://www.codewars.com/kata/586c1cf4b98de0399300001d