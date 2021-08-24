//using regular expression

function transform(str) {
  
  return str.replace(/[a-z]/gi, function(l) {
    
    var next = String.fromCharCode(l.charCodeAt(0) + 1);
    
    if (/[aeiou]/.test(next)) next = next.toUpperCase();
    
    return l == 'Z' ? 'A' : l == 'z' ? 'a' : next;
  });
  
}

transform('hello world 123'); 


=============

function LetterChanges(str) { 

  // code goes here
  var n = 0;
  var nstr = "";
  var oldAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var newAlph = ["b","c","d","E","f","g","h","I","j","k","l","m","n","O","p","q","r","s","t","U","v","w","x","y","z","A"];
  
  for (i=0;i<str.length;i++) {
    n = oldAlph.indexOf(str.substr(i,1));
    if (n>-1) {
      nstr = nstr + newAlph[n];
    } else {
      nstr = nstr + str.substr(i,1);
    }
  }
   return nstr; 

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges("zy name is srinivas");