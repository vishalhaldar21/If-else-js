



// (Q.15) ARM STRONG number in a given set of range

const input = require("readline-sync");

let a = input.questionInt("enter the number which the range will start = ");
let b = input.questionInt("enter the number which the range will ends = ");

p = a;
q = a;

count = 0;

sum = 0;

while ( a <= b ){

    while ( p > 0 ){
        
        c = p % 10;
        count++
        p = Math.floor( p/10 );
    }
    
    while ( q > 0 ){

        d =  q % 10;
        sum += ( d**count );
        q = Math.floor( q/10 );
    }

    if ( sum == a ){

        console.log("ARMSTRONG NUMBER IS = ", sum);
    }

    a++
    count = 0;
    sum = 0;
    p = a;
    q = a;

}