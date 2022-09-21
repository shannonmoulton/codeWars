function aliasGen() {
    return arguments[0][0].toUpperCase().match(/[A-Z]/) && arguments[1][0].toUpperCase().match(/[A-Z]/) ? firstName[arguments[0][0].toUpperCase()] + ' ' + surname[arguments[1][0].toUpperCase()] : "Your name must start with a letter from A - Z."
}

//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f