



//(Q.18) Take a number N from the user as input and repeatedly find the sum of the digits of the number till you get a single digit. 
// Print that digit. Example: 678 -> 6+7+8 = 21 -> 2+1 = 3


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

sum = 0;

while (Math.floor(n/10) != 0 )
{

    while (n > 0)
    {

        a = n % 10;
        sum += a;
        n = Math.floor(n/10);

    }

    n = sum;
    sum = 0;
}

console.log("the sum of the digits of the number till it become a single digit is = ", n);