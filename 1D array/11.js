



// (Q.27) Write a program to take two sorted arrays from the user as input and find the Union and Intersection of the arrays.

// Test Case1:

// Input:
// 1 3 4 5 7
// 2 3 5 6

// Output:
// 1 2 3 4 5 6 7

// 3 5




const input = require("readline-sync");

let m = input.questionInt("Enter the length of the 1st array = ");

let a = [m];

i = 0;

while ( i < m ){

    let p = input.questionInt("Enter the 1st array elements = ")

    a[i] = p;
    
    i++;
}

// **************************************************************************************

let n = input.questionInt("Enter the length of the 2nd array = ");

let b = [n];

i = 0;

while ( i < n ){

    let q = input.questionInt("Enter the 2st array elements = ")

    b[i] = q;
    
    i++;
}

// **************************************************************************************

let d = a.length + b.length;

let c = [d];

i = 0;
j = 0;
k = 0;


while (( i < m ) && ( j < n)){

    if ( a[i] < b[j] ){

        c[k] = a[i];
        k++;
        i++;
    }
    else if( a[i] == b[j] ){

        c[k] = a[i];
        k++;
        i++;
        j++;
    }
    else{

        c[k] = b[j];
        k++;
        j++;
    }
}

while ( i < m ){

    c[k] = a[i];
    k++;
    i++;
}

while ( j < n ){

    c[k] = b[j];
    k++;
    j++;
}

i = 0

let union = [];

k = 0;

while ( i < a.length){

    j = 0;

    while ( j < a.length ){

        if ( a[i] == b[j] ){

            union[k] = b[j];
            j = a.length
            k++;
        }
        else{
            j++;
        }
    }i++;

    
}

console.log("intersection of the given arrays is = ",c);
console.log("union of the given array is = ",union);