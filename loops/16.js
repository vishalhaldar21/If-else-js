



// (Q.17) Write a program to print only the prime factors of a given number 'N'. Take N from the user as input.
// Note: Prime factors are the prime numbers that divide a given number without leaving a remainder.


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

count = 0;

i = 1; 

sum = 0;

while ( i < n ){

    j = 1;

    while ( j <= i )
    {

        if ( i % j == 0 )
        {
            
            count++
            j++
        }
        else
        {
            j++
        }
        
    }

    if ((count == 2) && (n % i == 0))
    {

        sum++ 
        console.log("prime factors are = ",i);
    }
    i++;
    count = 0;
}

console.log("The count of prime factors are = ", sum);