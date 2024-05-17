



// Q1. GREATEST OF 3 NUMBERS. 

const input = require("readline-sync");

let a = input.questionInt("enter the first number");
let b = input.questionInt("enter the second number");
let c = input.questionInt("enter the third number");

if((a > b)&&(a > c)){

    console.log("a is the greatest among all");

}else if((b > a )&&(b > c)){

    console.log("b is the greatest among all");

}else{
    
    console.log("c is the greatest among all");
}