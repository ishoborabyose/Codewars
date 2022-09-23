function count (string) {  
    var count = {};
    string.split('').forEach(function(word) {
      
      if(count[word] ){
        return count[word] ++
      } else{
        count[word] = 1;
      }
      
    });
    return count;
  }