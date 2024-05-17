



// (Q.13.2) STAR PATTERN

// * * * * * *
// * *
// * *
// * *
// * *
// * * * * * *


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");


i = 1;

while ( i <= n ){

    str = ("");
    j = 1;

    if ( i == 1 ){

        while ( j <= n ){

            str += "* ";
            j++;
        }
    }

    if ( (i > 1) && (i < n) ){

        while ( j <= 2 ){

            str += "* ";
            j++;
        }j = 1;
    }

    if ( i == n ){

        while ( j <= n ){

            str += "* ";
            j++;
        }
    }

    console.log(str);
    i++;

}