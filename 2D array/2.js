



// (Q.35) 


// 1   2   3  

// 8   9   4

// 7   6   5




const input = require("readline-sync");

let n = input.questionInt("enter the number = ");

var a = [];

for (let i = 0; i < n; i++) {
    
    a[i] = [];
  
    for (let j = 0; j < n; j++) {
      
      a[i][j] = 0;
    }
}

console.log(a);


i = 1;
c = 1;
j = 0;
k = 0;
m = 1;
p = 0;



if (n % 2 == 0){
    
    q = (n + 5);
}
else{
    
    q = (n + 4);
}



while ( i <= q ){

  if ( c == 1 ){

    while ( p < n ){

      a[j][k] = m;
      m++;
      k++;
      p++;
    }
    k--;
    p = 0;
    j++;
  }

  if ( c == 2 ){

    while ( p < (n-1) ){

      a[j][k] = m;
      m++;
      j++;
      p++;
    }
    j--;
    p = 0;
    k--;
  }

  if ( c == 3 ){

    while ( p < (n-1) ){

      a[j][k] = m;
      m++;
      k--;
      p++;
    }
    k++;
    p = 0;
    j--;
  }

  if ( c == 4 ){

    while ( p < (n-2) ){

      a[j][k] = m;
      m++;
      j--;
      p++;
    }
    j++;
    k++;
    p = 0;
    n-= 2;
  }

  if ( c < 4 ){

    c++;
  }
  else{

    c = 1;
  }
  
  i++;
}  

console.log(a);