



//7.PERFECT NUMBER 

const input = require("readline-sync");

let n = input.questionInt("enter the number");

sum = 0;

for( i = 1; i < n; i++){
    if ( n % i == 0){
        sum = sum + i;
    }
}

if (sum == n){
    console.log( n,"is a SPECIAL type of  number");
}
else {
    console.log( n,"is not a SPECIAL type of number");
}