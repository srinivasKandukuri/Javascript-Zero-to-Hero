// Recent Samsung Interview Question.

// Pick odd index values and reverse those and place it .

ex : [1,2,3,4,5,6,7,8,9] -> [2,4,6,8] => rev -> [8,6,4,2];
o/P : [1,8,3,6,5,4,2,9];


var arr = [1,2,3,4,5,6,7,8,9];
var revarr = [];
var len = Math.floor(arr.length/2);

var j=arr.length-1;
for(var i=0; i<len; i++){
    if(i%2 !=0){
        var temp = arr[i];
        for( ; j>=0; j-- ){
           if(j%2 !=0){
               arr[i] = arr[j];
               arr[j] = temp;
               j = j-1;
               break;
           }
        }
    }
}

console.log(arr);
