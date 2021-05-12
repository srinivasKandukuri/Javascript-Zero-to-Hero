function addArray(arr) {
    let sum = 0;
    arr.map((item) => {
        if (Array.isArray(item)) {
            sum += addArray(item);
        }else{
          item = parseInt(item)
            if(!isNaN(item))){
                sum += item;
            }
        }
    });
    return sum;
}

#TestCases
/*
addArray([1,2,3,4,5]) //15
addArray([1,2,3,4,5,6,7,8,9,10]) //55
addArray([1,2, 3, 'uma', 4, 5]) // 15
addArray([1,2, 3, 'uma', {'a' : 'uma'}, 4, 5]) // 15
addArray([1,2,[[3],4], 5]) // 15
*/
console.log(addArray([["3", 2], 1,"sk",{'a':'uma'}, [4, 12]]));
