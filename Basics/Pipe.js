// Ref# https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937


var g = n+1;
var f = n*2;

var h = (value) => f(g(value));

//h(20); 


var compose1 = (f,g) => x => f(g(x));
//compose(f,g)(20);

/// compose right to left
var compose2 = (...fns) => x => fns.reduceRight((y,f) => f(y),x);
//compose2(f,g)(20);

// pipe left to right
// Explanation of es6 
var pipe = (...functions) => (value) => {
    debugger;
    return functions
      .reduce((currentValue, currentFunction) => {
         debugger;
         return currentFunction(currentValue);
      }, value)
  }
  

  
