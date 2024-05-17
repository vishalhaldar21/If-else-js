



// (Q.13.4) STAR PATTERN

// * * * *
// * *
// * *
// * 
// * *
// * *
// * * * * 


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

        str += "* ";
    }

    console.log(str);
    i++;
}

// -----------REVERSE---------------

i -= 2;

while ( i >= 1 ){

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

        str += "* ";
    }

    console.log(str);
    i--;
}