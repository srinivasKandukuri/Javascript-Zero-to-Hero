function addNum(num){

  var sum =0;
  
  for(i=num; i>0;i--){
  
    sum+=i;
  }
return sum;
}

addNum(15); // return 120 


// Recursion function 


function sum(n){
    
    if(n ==1 ){
        return 1;
    }else{
        var s = sum(n-1);
        s = s + n;
        return s;
    }
}

sum(15);
