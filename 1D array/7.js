



// (Q.30) Write a program to take a sorted array from the user as input and find a number using the linear/binary Search algorithm.

// Test Case1:

// Input:

// 1 2 3 4 5
// 5

// Output:
// Yes


const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers of elements = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the elements of array = ")

    a[i] = b;

    i++;
}

let k = input.questionInt("Enter the element which you have to search = ");



i = 0;
count = 0;


while ( i < n ){

    if ( a[i] == k ){

        count += 1;
        i = n;
    }
    else{
        i++;
    }

}

if ( count == 1 ){

    console.log("this number is present in the array ");
}
else{

    console.log("this number is not present in the array");
}