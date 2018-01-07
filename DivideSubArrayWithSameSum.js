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




var ar = [1,2,3,4,5,5];

var n  = ar.length;

splitArray(ar, n);


