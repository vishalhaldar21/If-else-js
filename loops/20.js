



// (Q12.1) STAR PATTERN

// *
// * * *
// * * * * *
// * * * * * * *


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

i = 1;
a = 1;

while ( i <= n ){

    str = ("");
    j = 1;

    while ( j <= a ){

        str += "* ";
        j++

    }

    console.log(str);
    a += 2;
    i++;

}