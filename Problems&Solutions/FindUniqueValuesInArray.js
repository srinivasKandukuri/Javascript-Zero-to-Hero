var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
uniqueArray(array);

function uniqueArray(array){
    var Obj = {};
    var unique = [];

    for(var i=0; i<array.length; i++){
        if(!Obj.hasOwnProperty(array[i]))
    {
        Obj[array[i]] = 1;
        unique.push(array[i]);
    }   

 }
 return unique;
}
