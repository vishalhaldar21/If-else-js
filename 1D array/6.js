



// (Q.25)Write a program to take a binary array which contains 0 and 1, and print the maximum number of consecutive 1's in the array.

// Testcase 1:

// Input:
// 1 1 0 1 1 1

// Output:
// 3

// Explanation:
// The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Testcase 1:

// Input:
// 1 0 1 1 0 1

// Output:
// 2




const input = require("readline-sync");

let n = input.questionInt("Enter the length of the numbers = ");
let p = input.questionInt("Enter the binary number ( 0 ) or ( 1 ) to find the MAX consecutive = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the binary number = ")

    a[i] = b;
    
    i++;
}

i = 0;
count = 0;
max = 0;

while ( i < n ){

    if ( p == a[i]){

        count += 1;
        i++;
    }
    else{

        count = 0;
        i++;

    }

    if ( count > 0 ){

        max = count;
    }

}

console.log("the maximum number of consecutive is = ", max);