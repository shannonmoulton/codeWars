function abbrevName(name) {
  const arr = name.split(" ");
  const initials = arr.shift().charAt(0) + "." + arr.pop().charAt(0);
  return initials.toUpperCase();
}
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
