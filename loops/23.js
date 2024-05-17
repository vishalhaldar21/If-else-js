



// (Q12.4) PATTERN

// 4
// 4 3 4
// 4 3 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 3 4
// 4 3 4
// 4


const input = require("readline-sync");

let n = input.questionInt("enter the number = ");


i = 1;

while ( i <= n )
{
    str = ("");
    j = n;
    a = 1;

    while ( a <= i )
    {
        str += j;
        j--;
        a++;
    }

    j += 2;

    if ( i != 1 )
    {
        while ( j <= n )
        {
            str += j;
            j++;
        }
    }
    console.log(str);

    i++;
}

// ------------reverse--------------

i -= 2;


while ( i >= 1 ){

    str = ("");
    j = n;
    a = 1;

    while ( a <= i )
    {
        str += j;
        j--;
        a++;
    }

    j += 2;

    if ( i != 1 )
    {
        while ( j <= n )
        {

            str += j;
            j++;
        }
    }
    console.log(str);

    i--;
}