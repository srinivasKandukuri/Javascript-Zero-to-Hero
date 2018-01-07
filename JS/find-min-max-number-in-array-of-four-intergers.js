
/**
 * [arr description]
 * Given Array of intergers
 * @type {Array}
 */
var arr = [1,2,3,4,5];

var sumA = [];
for(var i=0; i<arr.length; i++){
    var sum = sumVal(i, arr); // find out the sum of four intergers
    sumA.push(sum);
}

console.log(sumA); // debug output sumA

var max = Math.max(...sumA); // this will return the Max value in Array
var min = Math.min(...sumA); // this will return the Min value in Array

console.log(max + "  "+min);   // print the final output


/**
 * [sumVal description]
 * Array sum of four integers
 * @param  {[type]} i     [description]
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
function sumVal(i, array){
    var newArray = array.slice(); // creates a new Array
    newArray.splice(i, 1);  // removes 1 item at index i And 'newArray' contains only 4 value except i(current value) 
    var sum = newArray.reduce(function(total, num){
        return total+num; // returns the sum of four values
    })
   return sum;    
}

/*
O/P: 
------------------------------
14  10

 */