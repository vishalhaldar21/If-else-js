



// (Q.12.5) PATTERN

// 0 0 0 0 0
// x 0 0 0 x
// x x 0 x x
// x 0 0 0 x
// 0 0 0 0 0



const input = require("readline-sync");

let n = input.questionInt("enter the number = ");


i = 1;
a = 0;
b = n;
c = (n/2)+0.5

while ( i <= c ){

    str = ("");
    j = 1;

    if ( a > 0 ){

        while ( j <= a ){
            str += "x ";
            j++;
        }
    }j = 1;

    while ( j <= b ){

        str += "0 ";
        j++;
    }j = 1;

    if ( a > 0 ){

        while ( j <= a ){
            str += "x ";
            j++
        }
       
    }
    
    console.log(str);
    b -= 2;
    i++;
    a++;
}

// -------------reverse------------------

b += 4;
a -= 2;

while ( i <= n ){

    str = ("");
    j = 1;

    if ( a > 0 ){

        while ( j <= a ){
            str += "x ";
            j++;
        }
    }j = 1;

    while ( j <= b ){

        str += "0 ";
        j++;
    }j = 1;

    if ( a > 0 ){

        while ( j <= a ){
            str += "x ";
            j++
        }
       
    }
    
    console.log(str);
    b += 2;
    i++;
    a--;
}