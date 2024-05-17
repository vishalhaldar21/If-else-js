



//9. 2nd max among (N) numbers.

const input = require("readline-sync");

let n = input.questionInt("enter the total numbers");

let a = input.questionInt("enter the first numbers");
let b = input.questionInt("enter the second numbers");

if (a > b){
    max1 = a;
    max2 = b;
}
else{
    max1 = b;
    max2 = a;
}

i = 2;

while( i < n ){

    let c = input.questionInt("enter the next number");

    if ( c > max1 ){
        
        max2 = max1;
        max1 = c;
        i++;
    }
    else {

        if (c > max2){
            
            max2 = c;
            i++;
        }
        else { i++}
    }
   
}

console.log( "The second max number is =", max2 );