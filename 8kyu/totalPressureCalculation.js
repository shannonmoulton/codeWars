solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return ((((givenMass1 * 0.001 / molarMass1) + (givenMass2 * 0.001 / molarMass2)) * 0.082 * (temp + 273.15)) / volume) * 1000;
}

//https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
