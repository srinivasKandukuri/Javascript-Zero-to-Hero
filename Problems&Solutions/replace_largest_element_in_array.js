/*18. For every element is an array, look to all elements to its right and replace it with the the largest element
 E.g Input: 6 8 7 9 5 6
       Output: 9 9 9 9 6 6

*/



function fun(arr){
 for(var i=0 ; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
        if(arr[i] < arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
        }
    }
 }
}

console.log(arr);

var arr =[6,8,7,9,5,6];
fun(arr)

