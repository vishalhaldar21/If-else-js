



// (Q.13.3) STAR PATTERN

// * 
// * *
// * *
// * *
// * *
// *


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");


i = 1;

while ( i <= n ){

    str = ("");
    j = 1;

    if ( i == 1 ){

        str += "* ";
    }

    if ( (i > 1) && (i < n) ){

        while ( j <= 2 ){

            str += "* ";
            j++;
        }j = 1;
    }

    if ( i == n ){

        str += "* ";
    }

    console.log(str);
    i++;

}