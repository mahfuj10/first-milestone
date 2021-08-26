// nth = (n-1)th + (n-2)th
//ith = (i-1)th + (i-2)th
let fibo = [0,1];
for (let i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
 console.log(fibo);

// fibonacci in function

function myFunction(num){
if(typeof num != 'number'){
    return 'please give number';
}
else if(num < 2){
    return 'please enter a posative number geteater than 1';
}
const fibo =[0,2];
for (let i = 2; i <= num; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
return fibo;
}
const number = myFunction(5);
 console.log(number);


// recursive in fibonacci

function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboElemnt = fibonacci(6);
console.log(fiboElemnt);

function fibonacciSeries(n){   //make flow with recursive
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0,1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}
const fiboSeries = fibonacciSeries(6);
console.log(fiboSeries);