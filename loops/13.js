



//(Q.14) HCF OF (N) NUMBERS.

const input = require("readline-sync");

let n = input.questionInt("enter total number = ");

let a = input.questionInt("enter first number = ");

let b = input.questionInt("enter second number = ");

i = 2;

while ( i < n){
    
    if ( a > b ){
        max = a;
        min = b;
    }else {
        max = b;
        min = a;
    }

    while ( max % min !=0 ){

        t = max % min;
        max = min;
        min = t;
    }
    
    let c = input.questionInt("enter the next number = ");

    a = min;
    b = c;
    i++
}

console.log("The (HCF) of (N) numbers is = ",min);