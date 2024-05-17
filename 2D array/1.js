



// (Q.33) Write a program to add two matrices and store them in a separate matrix.

// Test Case1:

// Input:

// Matrix 1:
// 1 2 3
// 4 5 6
// 7 8 9

// Matrix 2:
// 9 8 7
// 6 5 4
// 3 2 1

// Output:
// 10 10 10
// 10 10 10
// 10 10 10


// FIRST ARRAY

const input = require("readline-sync");

const rows = input.questionInt("enter the number of rows = ");
const cols = input.questionInt("enter the number of columns = ");

const a = [];

for (let i = 0; i < rows; i++) {
    
    a[i] = [];
  
    for (let j = 0; j < cols; j++) {
      
      a[i][j] = input.questionInt("enter the first array elements  = ");
    }
}

// SECOND ARRAY

const b = [];

for (let i = 0; i < rows; i++) {
    
    b[i] = [];
  
    for (let j = 0; j < rows; j++) {
      
      b[i][j] = input.questionInt("enter the second array elements  = ");
    }
}

// THIRD ARRAY

const c = [];

for (let i = 0; i < rows; i++) {
    
    c[i] = [];
    
    for (let j = 0; j < rows; j++) {
        
      c[i][j] = a[i][j] + b[i][j];
    }
  
}

console.log(a);
console.log(b);
console.log(c);