



// (Q.28) Write a program to take an unsorted array of size N that contains only non-negative integers, and find a contiguous sub array that adds to a given number S. In case of multiple sub arrays, return the subarray which comes first on moving from left to right. Let us say the array is 3, 6, 7, 5, 10. And the value of S = 12. The output should be: 7, 5

// Test Case1:

// Input:
// 3 6 7 5 10

// 12

// Output:
// 7 5




const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers of elements = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the elements of array = ")

    a[i] = b;

    i++;
}

let c = input.questionInt("Give the number which's you want to find the sub arrays  = ")


i = 1;
j = 0;
k = 1;
count = 0;


while ( i < n ){

    if ( a[j] + a[k] == c){

        count += 1;
        i = n;
    }
    else{

        j++;
        k++;
        i++;
    }
}

if ( count > 0 ){

    console.log("the sub arrays are = ", a[j] ," and ", a[k]);
}
else{

    console.log("there is no continuous sub arrays in this array which makes the entered number");
}