function descendingOrder(n){
  
    return  parseInt(String(n).split('').sort((a,b) => a - b).reverse().join(""))
   
   //...
 }