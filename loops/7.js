



//(10.A)   Write a program to print the sum of a given number of terms (N) for a given value of X in the following mathematical series: (Input X and N from the user)

// X+(X^2)/2+(X^3)/3+(X^4)/4 ....upto N terms

const input = require("readline-sync");

let n = input.questionInt("enter the total numbers (n)");

let x = input.questionInt("enter the (x) numbers");



let i = 1; sum = 0;

while ( i <= n ){

    sum = sum + (x**i)/i;
    i++;
}


console.log("The sum of the given series is =", sum );