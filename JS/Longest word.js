function longword(word){
  
  resArr = word.split(" ");
  res = resArr.length;
  word =null;
  longest = 0;
  for(i=0;i<res; i++){
    //updating longest count with letest word
    // skiping if the count lessthan longest count
    if(longest < resArr[i].length){
      longest  = resArr[i].length;
      word =resArr[i]; // word stores each word
    }
  }
  return word;
}

longword("MY NAMEk IS HACKER");



