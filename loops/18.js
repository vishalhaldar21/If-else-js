



// (Q11.6) PATTERN 


// 

// 1

// 1 2 1

// 1 2 3 2 1

// 1 2 3 4 3 2 1

// 1 2 3 4 5 4 3 2 1


const input = require("readline-sync");

let n = input.question("enter the number = ");

i = 1;

while ( i <= n ){

    j = 1;
    str = ("");

    while ( j <= i ){
        
        str += j;
        j++
    }

    j-= 2;

    while ( j >= 1 ){
        
        str += j;
        j--
    }

    console.log(str);

    i++
}