function blackAndWhite(arr) {
    return !Array.isArray(arr) ? "It's a fake array" : arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array"
}

//https://www.codewars.com/kata/5732b0351eb838d03300101d