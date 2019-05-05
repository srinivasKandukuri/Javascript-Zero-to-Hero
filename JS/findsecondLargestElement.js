var arr = [2,3,4,56,67,7,65];

var max = Math.max.apply(null,arr)
arr.splice(arr.indexOf(max),1);
console.log(Math.max.apply(null,arr));
