function py(num){

    var out="";

    for(var i=1; i<=num; i++){
        
        for(j=1; j<=i; j++){
            out += j+ " ";
        }

        console.log(out);
        out = "";
    }
}

py(5);

OUTPUT: 
1 
1 2
1 2 3
1 2 3 4
1 2 3 4 5




function py2(size){
    var num =""
    for(var i=1; i<=size; i++){
            num = num + i + " "; 
            console.log(num);
    }
}

py2(5);

OUTPUT: 
1 
1 2
1 2 3
1 2 3 4
1 2 3 4 5


function py3(size){
    
   for(var i=size; i > 0; i-- ){
        var num = "";
       for(var j = i; j > 0 ; j--){
           num = num + j +" ";
       }
       console.log(num);
   }
}
py(5)


py(5);

OUTPUT: 
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
