var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);

// OUTPUT : [0, 2, 4]



// PROBLEM : 2

// Find given element in array without indexof function

var arr = [2,4,5,6];

var a = 6;
var len = arr.length;
while(len >= 0 ){
    if(arr[len] == a){
        console.log(arr[len]);
        console.log("index : "+len)
        break;
    }
    len --;
}
