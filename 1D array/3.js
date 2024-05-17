



// (Q.21)Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.





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
count = 0;

while ( j < n ){

    while ( k < n ){

        if ( a[j] == a[k] ){

            console.log("duplicate = ", a[j])
            k = n;
            count += 1;

        }
        else{

            k++;
        }
    }j++; k = j + 1;
}

if (count == 0 ){

    console.log("no duplicate");
}