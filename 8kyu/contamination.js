function contamination(text, char) {
    return !text || !char ? '' : char.repeat(text.length)
}

//https://www.codewars.com/kata/596fba44963025c878000039