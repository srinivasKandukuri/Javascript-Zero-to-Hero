// Ref# https://medium.com/@emmawedekind/bubble-sort-in-javascript-d299c33ca0c1

//Concept 1 Code

function bsort(arr){
    var done = false;
    while(!done){
        done = true;
        for(var i=0; i< arr.length; i++){
            if(arr[i] > arr[i+1]){
                done = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]= temp;
            }
        }
    }

   return arr;
  
}

console.log(bsort([3,4,2,10,66,99,1]));


// Bubble Sort is one of the most inefficient sorting algorithms coming in at O(N²). 
// In the worst case scenario, we will have to compare each element against every other element in the array, hence O(N²).


//Concept 2 Code

function bubbleSortConcept1(arr) {
  for (let j=arr.length-1; j>0; j--){
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      } 
    }
  }
  return arr;
}

bubbleSortConcept1([20,3,40,5,6,22,7])
