function FirstReverse(str) { 
var newStr= '';
  // code goes here  
	for(var i=str.length-1; i>=0; i--){
    	newStr = newStr + str.charAt(i);
    }
  return newStr; 
         
}
   
// keep this function call here 
FirstReverse("Hello");                            

