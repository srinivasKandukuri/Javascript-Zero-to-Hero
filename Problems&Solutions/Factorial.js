function FirstFactorial(num) { 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;
         
}
   
FirstFactorial(4);        



// EX :2 
function fact(num){
    var res = 1;
    for(var x= num; x > 1; x --){
        res = res*x;        
    }
return res;
}


//EX : 3
function fact2(n){

    if(n <=0){
        return 1;
    }
    else{
         return n * fact2(n-1);
    }
}

fact2(4);
