



// (Q.31) Write a program to take value N from the user and print the following pattern based on the user input.


// array = [2, 3, 5, 2, 1]

// >>
// >>>
// >>>>>
// >>
// >



const input = require("readline-sync");

let n = input.questionInt("Enter the total numbers of elements = ");

let a = [n];

i = 0;

while ( i < n ){

    let b = input.questionInt("Enter the elements of array = ")

    a[i] = b;

    i++;
}

i = 0;

while ( i < n ){

    j = 0;

    str = ("")

    while ( j < a[i] ){

        str += "> ";
        j++;
    }

    console.log(str);
    i++;

}