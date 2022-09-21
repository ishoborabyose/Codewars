function getMiddle(s)
{
  
  var position;
  var lengths
  
  if(s.length % 2==1){
    position = s.length / 2
    lengths = 1
  } else {
    position = s.length / 2-1
    lengths = 2
  }

return  s.substring(position, position + lengths)
  //Code goes here!
}