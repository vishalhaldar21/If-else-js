



// (Q.20)Write a program to take N numbers from a user as input and then take another number from the user M, and a number X from the user to be inserted at the Mth location in the array. Print the final array.
// Note - (Do not use another array)





const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the number " + (i + 1) + " = ")

    a[i] = b;
    

    i++;
}


let c = input.questionInt("Enter the nth number you want to delete = ")
let d = input.questionInt("Enter the number you want to replace = ")

a.splice(c-1,1,d);


console.log(a);