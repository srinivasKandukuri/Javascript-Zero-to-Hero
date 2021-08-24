var n = 100;

for(var i=3; i<=n; i++){

    var isPrime = true;

    for(var j=2;  j<i; j++){
        if(i%j == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(i);
    }
}
