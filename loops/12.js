



// Q.11.4 ( PATTERN )

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const input = require("readline-sync");

let n = input.questionInt("enter the number");
 

i = 1;
j = 1;

while ( i <= n ){
    
    a = 1;
    str = ("");

    while ( a <= i)
    {

        str += j;
        j++;
        a++

    }i++; 

    console.log(str);
}