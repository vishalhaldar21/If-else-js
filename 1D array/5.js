



// (Q.24) Write a program that rotates the elements of a list so that the elements at the first index move to the second elements at the second index move to the third and so on. The last element moves at the first index. (Take array and no_of_rotations from the user)

// Test Case1:

// Input:
// 1 2 3 4 5
// 3

// Output:
// 3 4 5 1 2

// Test Case2:

// Input:
// 1 2 3 4 5
// 5

// Output:
// 1 2 3 4 5



const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers = ");
let p = input.questionInt("Enter the rotation numbers = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the number = ")

    a[i] = b;
    
    i++;
}

i = 1;

while ( i <= p ){

    j = 0;
    k = 1;
    
    t = a[j];

    while ( k < n ){

        a[j] = a[k];
        j++;
        k++;
    }

    a[j] = t;
    i++;

}

console.log( a );