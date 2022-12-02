function animals(heads, legs){
    const cows = legs / 2 - heads
    const chickens = heads - cows
    
    return /\.|-/g.test(`${chickens}${cows}`) ? 'No solutions' : [chickens, cows]
  }
  /*
  heads = chickens + cows
  chickens = heads - cows
  
  legs = 2chickens + 4cows
       = 2(heads - cows) + 4cows
       = 2heads - 2cows + 4cows
       = 2heads - 2cows
  2cows = legs - 2heads
  cows = legs/2 - heads
  */
  
//https://www.codewars.com/kata/574c5075d27783851800169e