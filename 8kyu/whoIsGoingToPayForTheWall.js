function whoIsPaying(name) {
    return name.length <= 2 ? [name] : [name, name.slice(0, 2)]
}

//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
