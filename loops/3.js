



//6. HCF AND LCM OF TWO NUMBERS.

const input = require("readline-sync");

let p = input.questionInt("enter the first number");
let q = input.questionInt("enter the second number");

if (p > q){
    a = p;
    b = q;
}
else{
    a = q;
    b = p;
}

while( a % b != 0){
    t = a % b;
    a = b;
    b = t;
}

HCF = b;
LCM = (p * q)/b;

console.log("the HCF is =", HCF);
console.log("the LCM is =", LCM);