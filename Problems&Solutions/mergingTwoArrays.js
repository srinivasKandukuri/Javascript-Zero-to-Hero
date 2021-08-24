var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,0];


//arr.concat(arr2);        // simple soulution


// without concat;
var arr1Len = arr1.length;

var dumArr = arr1;

for(var i=0; i< arr2.length; i++){
    dumArr[arr1Len++] = arr2[i];
}

console.log(dumArr);
