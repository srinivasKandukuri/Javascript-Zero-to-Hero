/**
 * [getSplitpoint description]
 * This function sum all left to right and Tight to left elements
 * checks for Sum equal every time and returns the SpotPoint
 * @param  {[type]} ar [description]
 * @param  {[type]} n  [description]
 * @return {[type]}    [description]
 */
function getSplitpoint(ar, n){

    var sumLeft = 0;

    for(var i=0; i<n; i++){
    
        sumLeft +=ar[i];
        var rightSum = 0;
    
        for(var j=i+1; j<n; j++){
            rightSum +=ar[j];
        }
       
       if(sumLeft == rightSum){
            return i+1;
        }
    }
    return -1;
}

/**
 * [splitArray : Split into two arrays]
 * @param  {[type]} ar [description]
 * @param  {[type]} n  [description]
 * @return {[type]}    [description]
 */
function splitArray(ar, n){
    
    var splitPoint = getSplitpoint(ar, n);

    if(splitPoint == -1 || splitPoint == n){
        console.log('it is not possible to splitArray');
    }
    
    for(var i=0; i<n; i++){
        if(splitPoint == i){
            console.log(ar.splice(0, i));
            console.log(ar);
        }
    }
}



/**
 * [ar interger Array]
 * @type {Array}
 */
var ar = [1,2,3,4,5,5];

splitArray(ar, ar.length);


