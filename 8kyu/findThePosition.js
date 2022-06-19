function position(letter){
    const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    const array = alphabet.split(',')
    
    return `Position of alphabet: ${array.indexOf(letter) + 1}`
    }
//https://www.codewars.com/kata/5808e2006b65bff35500008f