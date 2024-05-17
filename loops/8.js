



//(10.B)  X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... upto N terms

const input = require("readline-sync");

let n = input.questionInt("enter the total numbers (n)");

let x = input.questionInt("enter the (x) numbers");



let i = 1; sum = 0; a = 1;

while ( i <= n ){

    if ( i % 2 != 0){

        sum = sum + ((x**a)/a);
        i++;
        a += 2;
    }
    else {
        sum = sum - ((x**a)/a);
        i++;
        a += 2;
    }
}


console.log("The sum of the given series is =", sum );