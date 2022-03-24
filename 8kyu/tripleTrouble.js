function tripleTrouble(one, two, three) {
    let finalStr = ""

    for (let i = 0; i < one.length; i++) {
        finalStr += one.charAt(i) + two.charAt(i) + three.charAt(i)
    }
    return finalStr
}
//https://www.codewars.com/kata/5704aea738428f4d30000914