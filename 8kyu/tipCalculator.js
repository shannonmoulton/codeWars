function calculateTip(amount, rating) {
    let rate = rating.toLowerCase()
    let tip = 0

    switch (rate) {
        case "terrible": tip = Math.ceil(0 * amount)
            break;
        case "poor": tip = Math.ceil(.05 * amount)
            break;
        case "good": tip = Math.ceil(.10 * amount)
            break;
        case "great": tip = Math.ceil(.15 * amount)
            break;
        case "excellent": tip = Math.ceil(.20 * amount)
            break;
        default: tip = "Rating not recognised";
    }
    return tip
}
//https://www.codewars.com/kata/56598d8076ee7a0759000087