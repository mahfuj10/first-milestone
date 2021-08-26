// math floor
/*let number = 4.2;
let convert = Math.floor(number); //convert full number example 5.6 = 5;
console.log(convert);*/

// math round
/*let number = 5.7;
let convert = Math.round(number); //convert full number and which is near
console.log(convert);*/

// math abs
/*let number = -5; 
let convert = Math.abs(number); //to convert - to +;
console.log(convert)*/

// math random
// console.log(Math.round(Math.random()*5)); //if you console again and again the number was change

// math ceil
/*let number = 4.02; 
let convert = Math.ceil(number); //to convert full number example 5.6 = 6;
console.log(convert);*/

// math random in for loop
/*for (let i = 0; i <=10; i++){
    const output = Math.random() * 6;
    const round = Math.round(output);
    console.log(round)
}*/

const selected = [];
for(let i = 0; i < 10; i++){
    const random = Math.random() * 100;
    const picked = Math.round(random);

    if(selected.indexOf(picked) == -1 ){
        selected.push(picked)
    }
    else{
    console.log(selected, picked);

    }
}
console.log(selected);




// swap varible
/*
let firstNumber = 5;
let secondNumber = 3;
// console.log(firstNumber,secondNumber);

let swap = firstNumber;
firstNumber = secondNumber;
secondNumber = swap;
// console.log(firstNumber,secondNumber)

// another role of swap
let firstNumber = 5;
let secondNumber = 3;
console.log(firstNumber,secondNumber);
[firstNumber,secondNumber] = [secondNumber,firstNumber];
console.log(firstNumber,secondNumber)*/