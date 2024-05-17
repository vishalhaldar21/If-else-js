



// (Q.12.3) STAR PATTERN

// * *
// ** **
// *** ***
// ********
// *** ***
// ** **
// * *



const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

i = 1;
a = 1;

while ( i <= n ){

    str = ("");
    j = 1;

    while ( j <= a ){

        str += "* ";
        j++;
    }

    if ( i != n ){

    str += " ";

    }
    
    j = 1;

    while ( j <= a ){

        str += "* ";
        j++;
    }

    console.log(str);
    a++;
    i++;
}
// ---------------------reverse-----------------------

i -= 2;
a -= 2;

while ( i >= 1 ){

    str = ("");
    j = 1;

    while ( j <= a ){

        str += "* ";
        j++;
    }

    if ( i != n ){

    str += " ";

    }
    
    j = 1;

    while ( j <= a ){

        str += "* ";
        j++;
    }

    console.log(str);
    a--;
    i--;
}