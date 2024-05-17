



// (Q.23) Write a program to take N numbers from the user and print the frequency of every number.

// Test Case 1:

// Input:

// 6
// 2 4 2 6 3 6

// Output:
// 2 - 2
// 4 - 1
// 6 - 2
// 3 - 1





const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the number = ")

    a[i] = b;
    

    i++;
}

j = 0;

k = 1;

count = 1;

while ( j < n ){

    while ( k < n ){

        if( a[j] == a[k] ){

            count += 1;
            n -=1;
            p = k;

            while ( k < n ){

                a[k] = a[k + 1];
                k++;
            }k = p;
            
        }
        else{
            k++;
        }
    }
    console.log( a[j] ," - ", count);
    j++;
    k = j + 1;
    count = 1;
}