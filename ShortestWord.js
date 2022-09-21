function findShort(s){
  
    var s =  s.split(' ');
    var arr = [];
    var a = 0;
    
    for(i = 0; i < s.length; i++){
      
      arr = s[i]
      
      if(a == 0 || arr.length < a){
        a = arr.length
      }
    }
    return a
  }