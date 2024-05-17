



// (Q.16) Write a program to take a number and print the count of the prime numbers that are strictly less than the number.

const input = require("readline-sync");

let n = input.question("enter the number = ");

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

    if ( count == 2 )
    {

        sum++
        console.log("prime number = ",i);
    }
    i++;
    count = 0;
}

console.log("The count of prime numbers are = ", sum );