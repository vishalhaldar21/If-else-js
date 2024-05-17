



// *
// * * 
// * * *
// * * * * 
// * * * * *



// Q.11.1 ( STAR PATTERN )

const input = require("readline-sync");

let n = input.questionInt("enter the number");
 

i = 1; 

while ( i <= n ){

    j = 1;
    str = ("");

    while ( j <= i){

        str += '* ';
        j += 1;

    }i++;
    console.log(str);
}