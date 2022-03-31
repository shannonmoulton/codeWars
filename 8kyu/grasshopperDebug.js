function weatherInfo(temperature) {
    var c = convertToCelsius(temperature)
    if (c < 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9)
    return celsius
}
//https://www.codewars.com/kata/55cb854deb36f11f130000e1