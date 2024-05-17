



//8. MAX AND MIN NUMBERS IN (N) NUMBERS.

const input = require("readline-sync");

let n = input.questionInt("enter the total numbers");

let a = input.questionInt("enter the first numbers");
let b = input.questionInt("enter the second numbers");

if (a > b){
    max = a;
    min = b;
}
else{
    max = b;
    min = a;
}

i = 2;

while( i < n ){

    let c = input.questionInt("enter the next number");

    if ( c > max ){
        max = c;
    }
    else if ( c < min ){
        min = c;
    }
    i++;
}


console.log("The maximum among the number is =", max);
console.log("The minimum among the number is =", min);