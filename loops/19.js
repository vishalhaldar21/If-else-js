



// (Q.11.5) PATTERN

// 0
// 2 4
// 4 8 8
// 8 16 16 16


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

i = 1;
a = 1;
j = 0;

while ( i <= n ){

    str = ("");
    str += j;

    if ( i == 1 ){

        j += 2;
        a++;
    }
    else {

        j *= 2;
        a++;
    }

    while ( a <= i){

        str += j;
        a++;
    }

    console.log(str);
    a = 1;
    i++;
     
}