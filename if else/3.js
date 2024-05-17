



// Q3. THIRD MAX AMONG 4 NUMBERS.

const input = require("readline-sync");

let a = input.questionInt("enter the first number");
let b = input.questionInt("enter the second number");
let c = input.questionInt("enter the third  number");
let d = input.questionInt("enter the fourth number"); 

if (a < b) {
    min1 = a; max1 = b;
}
else {
    min1 = b; max1 = a;
}

if (c < d) {
    min2 = c; max2 = d;
}
else {
    min2 = d; max2 = c;
}

if (max1 < max2) {
    min3 = max1;
    firstMax = max2;
}
else {
    min3 = max2;
    firstMax = max1;
}

if (min1 > min2){
    if (min1 > min3){
        secondMax = min1;
        min1 = min2;
        min2 = min3;
    }
}
if (min2 > min3){
    if (min2 > min1){
        secondMax = min2;
        min2 = min3
    }
}
if (min3 > min1){
    if (min3 > min2){
        secondMax = min3;
    }
}

if (min1 > min2){
    thirdMax = min1;
    fourthMax = min2;
}else{
    thirdMax = min2;
    fourthMax = min1;
}

console.log("firstMax = ", firstMax);
console.log("secondMax = ", secondMax);
console.log("thirdMax = ",  thirdMax);
console.log("fourthMax = ", fourthMax);