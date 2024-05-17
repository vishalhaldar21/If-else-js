



// * * * * *
// * * * *
// * * *
// * * 
// *



// Q.11.2 ( STAR PATTERN )

const input = require("readline-sync");

let n = input.questionInt("enter the number");
 

i = 1; 
a = n;

while ( i <= n ){

    j = 1;
    str = ("");

    while ( j <= a ){

        str += '* ';
        j += 1;

    }i++; a--
    console.log(str);
}