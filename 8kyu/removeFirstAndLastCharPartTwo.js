function array(arr){
  let finalArr = arr.split(',').slice(1,-1).join(' ')
  if(arr.length < 3){
    return null
  }else if(finalArr === ''){
  return null 
  }else
    return finalArr
}
//https://www.codewars.com/kata/570597e258b58f6edc00230d