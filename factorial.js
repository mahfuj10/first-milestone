// factorial declare


let factorial = 1;
for(let i = 1; i < 7; i++){
   console.log(factorial);
    factorial = factorial * i;
}


// factorial in function for loop

function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
   let firstFactorial = getFactorial(7);
   console.log (firstFactorial);


// factorial in function while loop 

function getFactor(number){
    
    let factor = 1;
    let i = 1;
    while(i <= number){
       factor = factor * i;
       i++;
    }
    return factor;
}
let firstFactor = getFactor(4);
console.log(firstFactor);


// factorial reverse function while loop 
function getFactor(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
       factorial = factorial * i;
       i--;
    }
    return factorial;
}
let firstFactor = getFactor(6);
console.log(firstFactor);

// factorial reverse function for loop 

function myFunction(number){
let factor = 1;
for(let i = number; i >= 1; i--){
    factor = factor * i;
}
return factor;
}
let firstFactor = myFunction(6);
console.log(firstFactor);


// factorial recursion

function factorial(n){

    if(n == 1){
        return 1;
    }
    return n * factorial (n - 1);

}
let myFactorial = factorial(5);
console.log(myFactorial);
