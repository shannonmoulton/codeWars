function excludingVatPrice(price) {
    return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b