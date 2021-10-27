function getCount(str) {
    if(str.includes('a','e', 'i','o','u') === true){
       return str.match(/[a,e,i,o,u]/g).length;
    }else{
      return 0
    }
  }
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
