var arr = [1,2,[3,[4,5],6], 7];
let newArr = [];
function fun(arr){

    for(var i=0 ; i< arr.length; i++){
        var subarray = arr[i];
        if(Array.isArray(subarray)){
            fun(subarray);
        }else{
            newArr.push(subarray);
        }

    }
}

fun(arr);
console.log(newArr);

//OUTPUT  [1,2,3,4,5,6,7];
