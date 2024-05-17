




// (Q.26) Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

// Test Case1:

// Input:

// 1 2 5 6
// 3 4 7 9

// Output:

// 1 2 3 4 5 6 7 9



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


console.log(c);