
//Ref# https://www.geeksforgeeks.org/insertion-sort/
//https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg

/* . Ascending */

var numArray = [140000, 104, 99,1000,200];

for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}

console.log(numArray);

//[99, 104, 200, 1000, 140000]



/* Descending */

var numArray = [140000, 104, 99];
for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] < target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}
console.log(numArray);






/* Sorting string using Selection Sort */



function sort(str){

    var numArray = str.split('');

   for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}
  console.log(numArray);
  console.log(numArray.join(''))
}

sort("zaasfweqrouoicxzvjlmmknkniqwerpopzxcvdfaa");
