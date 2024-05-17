



// Q2. GREATEST OF 4 NUMBERS. 

const input = require("readline-sync");

let a = input.questionInt("enter the first number");
let b = input.questionInt("enter the second number");
let C = input.questionInt("enter the third number");
let d = input.questionInt("enter the fourth number");

if((a > b)&&(a > c)&&(a > d))
{

    console.log("a is greater");
}
else if((b >c)&&(b > d))
{

    console.log("b is greater");
}
else if(c > d)
{

    console.log("c is greater");
}
else
{
    console.log("d is greater");
}