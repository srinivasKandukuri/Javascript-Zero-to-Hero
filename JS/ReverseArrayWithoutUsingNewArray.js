function reverse(arr){
    for(var i=0, j= arr.length-1; i<j; i++, j--){
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}


var arr = [1,2,3,4,5];

reverse(arr);
