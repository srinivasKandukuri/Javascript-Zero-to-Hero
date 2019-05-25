//ref# https://www.youtube.com/watch?v=S1qHWjP1hb0
//https://medium.com/@khanght/javascript-top-interview-questions-part-1-sorting-algorithm-d386fbb201c8
//https://www.geeksforgeeks.org/quick-sort/



function qsort(arr){
    if(arr.length ==0){
        return [];
    }

   const [pivot, ...rest] = arr;  // pivot = first element, rest = clone of array
    
    //or 
    // const rest = arr.slice(0); // clone the array
    // const pivot = rest[0];
   
   const left = [], right = [];

   rest.forEach(e1 => e1 < pivot ? left.push(e1) : right.push(e1));

   return qsort(left).concat(pivot).concat(qsort(right));
}

console.log(qsort([10,2,3,4,1,5]));





/********** Method ES5 **********/

function quicksort(array) {
  var sortedArray = array.slice(0); // clone the array
  if(sortedArray.length == 0) return [];

  var left = [], right = [], pivot = sortedArray[0];

  for (var i = 1; i < sortedArray.length; i++) {
    if(sortedArray[i] < pivot) {
      left.push(sortedArray[i]);
    } else {
      right.push(sortedArray[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));
}



/***** time complexity*********/

// Merge Sort is the fastest stable sorting algorithm with worst-case complexity of O(nlogn), 
// but it requires extra space. Although, if memory constraints are very tight you can use Quick Sort, 
// whose worst-time compelxity is O(n^{2}) but average case complexity is O(nlogn).


Algorithm	Time Complexity

                Best	        Worst
Quicksort	    Ω(n log(n))	    O(n^2)
Mergesort	    Ω(n log(n))	    O(n log(n))
