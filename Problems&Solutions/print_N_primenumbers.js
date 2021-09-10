/*
1. A prime number is a natural number greater than 1, which is only divisible by 1 and itself. First few prime numbers are : 2 3 5 7 11 13 17 19 23 …..
2. Two is the only even Prime number.
3. Two and Three are only two consecutive natural numbers that are prime.
*/

function prime(n,flag) {
    ( typeof flag === "undefined" || flag === false ) ? flag = false : flag = true;

    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    if ( flag ) {
        var arr = [2];
        for ( var i = 3; i <= n; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}



console.log(prime(2)); // returns true ( 2 is prime )
console.log(prime(8)); // returns false ( 8 isn't prime )

console.log(prime(100,true)); // returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]





/*

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

*/