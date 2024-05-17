



// (Q.36) Write a program to take two numbers as input each in a different array. Each digit of the number should be in an element in the array. calculate their product in another array such that each digit is stored as an array element and print the product.

// Testcase1:

// Input:
// 3 6 7
// 7 6

// Output:
// 2 7 8 9 2

// Explanation:
// The product of numbers 367 and 76 is 27892.





const input = require("readline-sync");

// for the first array...

let p = input.questionInt("enter the length of first  array = ")

let a = [];

i = 0;

while ( i < p ){

    a[i] = input.questionInt("enter the first array elements = ")
    i++;
}

// for the second array...

let q = input.questionInt("enter the length of second array = ")

let b = [];

i = 0;

while ( i < q ){

    b[i] = input.questionInt("enter the first array elements = ")
    i++;
}






// change value in array 1

i = 1;
j = (a.length - 2);
product = 10;

while ( i < a.length ){

    a[j] = a[j]*product;
    j--;
    i++;
    product *= 10;
}

// change value in array 2

i = 1;
j = (b.length - 2);
product = 10;

while ( i < b.length ){

    b[j] = b[j]*product;
    j--;
    i++;
    product *= 10;
}


// console.log(a);
// console.log(b);





// ************************************ ADDITION FIRST ARRAY ********************************************

i = 0;

sum1 = 0;

while ( i < (a.length) ){

    sum1 += a[i];
    i++;
}

// ************************************ ADDITION SECOND ARRAY ********************************************

i = 0;

sum2 = 0;

while ( i < (b.length) ){

    sum2 += b[i];
    i++;
}



// console.log(sum1);
// console.log(sum2);




// ************************************** MULTIPLICATION OF ARRAYS *****************************************

let e = (sum1 * sum2) 

let c = [];

i = 0;

while ( e > 0 ){

    d = e % 10;

    c[i] = d;

    e = Math.floor(e/10)
    
    i++;
}

c.reverse();

console.log(c)