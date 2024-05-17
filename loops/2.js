



//Q5. PRIME NUMBERS.


const input = require("readline-sync");

let n = input.questionInt("ENTER A NUMBER TO CHECK ITS PRIME OR NOT? = "); 

count = 0;

for ( i = 1; i <= n; i++ ){
    if ( n % i == 0){
        count++;
    }
}
if ( count == 2){
    console.log("the number is a prime number");
}
else {console.log("the number is not prime");}