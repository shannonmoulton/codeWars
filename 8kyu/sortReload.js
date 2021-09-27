Array.prototype.sortReloaded = function(dir){
  
    let arr = [...this] // Making a copy of the array that will use our prototype sortReloaded. [...arr] the '...' is call spread operator and loops through the array
    
    
    //This for loop is sorting the array (this method is call Bubble sort Algorithm)
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
          if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
  }
    //conditions
    
      if( dir ===  'desc'){
      return arr.reverse() // From the sorting for loop we are getting the sorted array in asc way, in this condition we are just reversing it to have it in desc way
    }else if (dir == 'asc' || dir == undefined){
      return arr //just returning the sorted array we got from the loop
    }else{
      return false //for any other dir value diferent than desc, asc or undefined we return false as the challenge requires.
    }
    }

//https://www.codewars.com/kata/5610a8eeb9a84d624b000005/train/javascript