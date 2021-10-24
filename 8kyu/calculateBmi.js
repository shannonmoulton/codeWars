function bmi(weight, height) {
  if (weight / Math.pow(height, 2) <= 18.5) {
    return "Underweight";
  } else if (weight / Math.pow(height, 2) <= 25.0) {
    return "Normal";
  } else if (weight / Math.pow(height, 2) <= 30.0) {
    return "Overweight";
  } else if (weight / Math.pow(height, 2) > 30) {
    return "Obese";
  }
}
//https://www.codewars.com/kata/57a429e253ba3381850000fb
