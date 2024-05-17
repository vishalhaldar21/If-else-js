



// (Q.19)Write a program to take N numbers from a user as input and store them in an array and then take another number from the user M, and delete the Mth element from the array. Print the final array.
// Note - (Do not use another array)



const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the numbers" + (i + 1) + " = ");

    a[i] = b;

    i++;
}


let c = input.questionInt("Enter the index number you want to delete = ");

a.splice(c-1,1);


console.log(a);