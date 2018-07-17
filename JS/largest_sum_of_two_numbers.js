
var arr = [2,3,10,5];


var big=arr[0] , second=arr[1];

if(big<second){
    big = arr[1];
    second = arr[0]
}

for(var i=2; i<arr.length; i++){
    if(arr[i] > big){
        big = arr[i];
    }else if(arr[i]>second){
        second = arr[i];
    }
} 

console.log(big+second);
