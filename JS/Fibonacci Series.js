A Fibonacci Series of numbers will look like
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55

First two Fibonacci numbers are 0 and 1 . After that each number will be the sum of previous two numbers . Here we can see that third Fibonacci number is 1 ( sum of first two numbers 0 + 1 ) , and fourth Fibonacci number will be the sum of third and second number ( 1 + 1 = 2 ) , and fifth Fibonacci number will be the sum of fourth and third number ( 2 + 1 = 3 ). The series will go like that infinity .

JS
============

var count = 0;
var a = 0;
var b = 1;
console.log(a);
console.log(b);
while(count <5){
  var c;
  c = b + a;
  console.log(c);
  a = b;
  b = c;
 count= count+1;
}



JS
==================
var a = 0;
var b = 1;
console.log(a);
console.log(b);
for (var i= 2 ; i<10; i++){
  var c;
  c = b + a;
  console.log(c);
  a = b;
  b = c;
}


