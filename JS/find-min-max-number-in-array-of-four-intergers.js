var arr = [1,2,3,4,5];

var sumA = [];
for(var i=0; i<arr.length; i++){

    var sum = sumVal(i, arr);
    sumA.push(sum);
}

console.log(sumA);

var max = Math.max(...sumA);
var min = Math.min(...sumA);

console.log(max + "  "+min);  


function sumVal(i, array){
    var newArray = array.slice(); // creates a new Array
    newArray.splice(i, 1);  // removes 1 item at index i
    var sum = newArray.reduce(function(total, num){
        return total+num;
    })
   return sum;    
}

/*
O/P: 
------------------------------
14  10

 */