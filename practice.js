

// function myFunction(mark){
// if(mark > 100 || mark < 1){
//     console.log('not valid');
// }
// else if(mark >= 80){
//     console.log('You got a A+')
// }
// else if(mark >= 70){
//     console.log('You got a A')
// }
// else if(mark >= 60){
//     console.log('You got a A-')
// }
// else if(mark >= 50){
//     console.log('You got a B')
// }
// else if(mark >= 40){
//     console.log('You got a C')
// }
// else if(mark >= 33){
//     console.log('You got a D')
// }
// else{
//     console.log('You are a fail try again');
// }
// }
// myFunction(53)


// function factorial(n){

//     if(n == 1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// const fact = factorial(7);
// console.log(fact);


// function mTokm(m){
//     let km = m / 1000;
//     return km;
// }
// let kilometer = mTokm(1000);
// console.log(kilometer)

// function inchTofeet(inch){
//     let feet = inch / 12;
//     return feet;
// }
// let inc = inchTofeet(24);
// console.log(inc, 'feet');

// function myFunction(number){
//     if(number %2 == 0){
//         return 'the number is even';
//     }
//     else{
//         return 'the number is odd';
//     }
// }
// let num = myFunction(6);
// console.log(num);

// function myFunction(celsius){

//     let fahrenheit = (celsius - 32) * 5/9;
//     return fahrenheit
// }
// let cel = myFunction(55);
// console.log(cel);

// function myFunction(celsius){

//     let fahrenheit = (celsius - 32) * 5/9;
//     console.log(fahrenheit)

// }
//  myFunction(55)


// function myFunction(number){
// var factor = 1;
// let i = 1;
// while(i <= number){
//     factor = factor * i;
//     i++;
// }
// return factor;
// }
// const factorial = myFunction(7);
// console.log(factorial); 

// function myFunction(n){
//     if(n == 1){
//         return 1;
//     }
//     else{
//         return n * myFunction(n-1);
//     }
// }
// const facr = myFunction(7);
// console.log(facr);

// math
// let number = -5.4;
// console.log(Math.abs(number));
// let random = Math.random()*10;
// console.log(random);
// max and small

// find big number
// var x = 9;
// var y = 1;
// var z = 15;
// if(x > y && x> z){
//     console.log('x is bigger');
// }
// else if(y > z && y > x){
//     console.log('y is bigger');
// }
// else{
//     console.log('z is bigger');
// }

// function bigNumber(x,y,z){
//     if(x > y && x> z){
//         return 'x is bigger';
//     }
//     else if(y > z && y > x){
//         return 'y is bigger';
//     }
//     else{
//         return 'z is bigger';
//     }
// }
// const num = bigNumber(55,17,8);
// console.log(num);

// let array = [-5,-4,-3,-17,-15,-2];
// let largest = array[0];
// for(let i = 0; i < array.length; i++){
//     let elemnt = array[i];
//     if(elemnt > largest){
//         largest = elemnt;
//     }
// }
// console.log(largest)

// let array = [5,4,3,17,15,2,-5];
// var largeNumber = Math.min(...array);
// console.log(largeNumber);

// var num1 = 5;
// var num2 = 7;
// console.log(num1,num2);
// var change = num1;
// num1 = num2;
// num2 = change;
// console.log(num1,num2);

// nth = (n-1)th + (n-2)th
//ith = (i-1)th + (i-2)th

// function myFunction(num){

/*     const fibo = [0,1];
    if(typeof num != 'number'){
        return 'not valid please enter type of number';
    }
    if(num < 2){
        return 'please enter a number gettarden 2';
    }
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    
    }
  return fibo;
}
const fibonacci = myFunction(15);
console.log(fibonacci);

function fibonacciSeries(n){

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
const fibonacci = fibonacciSeries(10);
console.log(fibonacci) */


/* const selected = [];
for(let i = 0; i < 10; i++){
    const random = Math.random() * 50;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1 ){
        selected.push(picked);
    }
    else{
        console.log(selected,picked);
    }
}
console.log(selected) */

/* function arrayFunction(array){
let largest = array[0];
for(let i =0; i < array.length; i++){

let elemnt = array[i];
if(elemnt > largest){
    largest = elemnt;
}
}
return largest;
}
const arrayNumber = arrayFunction([5,8,15,41,54,6,9,200,78,94]);
console.log(arrayNumber);
 */

/* function arrayFunction(array){
    let smallest = array[0];
    for(let i = 0; i < array.length; i++){
        let elemnt = array[i];
        if(elemnt < smallest){
           smallest = elemnt ;
        }
    }
    return smallest;
}
const arrayNumber = arrayFunction([8,58,7,-5,4,6,2,1]);
console.log(arrayNumber); */

/* function myFunction(num){
let fibo = [1,2];
for(let i =2; i<=num; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
return fibo;
}
const fiboNacci = myFunction(5);
console.log(fiboNacci);
 */

/* function getFactorial(factor){
let factorial = 1;
for(let i = 1; i <= factor; i++){
    factorial = factorial * i;
}
return factorial;
}
const fact = getFactorial(5);
console.log(fact); */

/* function getFactorial(num){

    let factorial = 1;
    let i = 1; 
    while( i<= num ){
factorial = factorial * i;    
i++;
}

return factorial;
}
const fact = getFactorial(5);
console.log(fact) */

/* function getFactorial(num){

if(num == 1){
    return 1;
}

return num * getFactorial(num-1);
}
const fact = getFactorial(5);
console.log(fact) */

/* function fibonacci(num){
    let fibo = [0,2];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboNumber = fibonacci(10);
console.log(fiboNumber); */ 

/* function fibonacci(num){
    if(num == 0){
        return [0];
    }
    if(num == 1){
        return [0,1]
    }
const fibo = fibonacci(num - 1);
fibo[num] = fibo[num-1] + fibo[num-2]; 

return fibo;
}
const fiboNumber = fibonacci(5);
console.log(fiboNumber);  */

/* function fiboNacci(n){
let fibo = [0,1];
for(let i=2; i<=n; i++){
fibo[i] = fibo[i-1] + fibo[i-2];
}
return fibo;
}
const fiboNumber = fiboNacci(5);
console.log(fiboNumber) */

/* function fiboNacci(n){
   if(n == 0){
       return [0];
   }
   if(n == 1){
       return [0,1];
   }
   const fibo = fiboNacci(n-1);
   fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}
    const fiboNumber = fiboNacci(5);
    console.log(fiboNumber); */

/* function needWood(chairQuantity,tableQuantity,bedQuantity){
    const chairWood = 10;
    const tableWood = 15;
    const bedWood = 50;

const chairWoodQuantity = chairQuantity  * chairWood;  
const tableWoodQuantity = tableQuantity  * tableWood;  
const WoodQuantity = bedQuantity  * bedWood;  

const totalQunatity = chairWoodQuantity + tableWoodQuantity + WoodQuantity;

return totalQunatity;
}
const answer = needWood(5,4,3);
console.log(answer);
 */

/* let names = ['habul','babul','cabul','babul','sabul','kabul','habul'];

function myFunction(names){

    let array = [];
    for(let i = 0; i <= names.length; i++){
    const elemnt = names[i];
    if(array.indexOf(elemnt) == -1){
    array.push(elemnt);
}

    }
return array;

    
}
const ans = myFunction(names);
console.log(ans) */

/* function myFunction(number){

let largest = number[0];
for(let i=0; i < number.length; i++){

    let elemnt = number[i];
    if(elemnt < largest){
        largest = elemnt;
    }
}
return largest;
}
const largNumberOfArray = myFunction([5,7,8,9,4,54,1,36,45,-5]);
console.log(largNumberOfArray) */


/* function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i<=num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const fact = getFactorial(5);
console.log(fact); */

/* function getFactorial(n){

    if(n == 1){
        return 1;
    }
    return n * getFactorial(n-1);//0 1 1 3

}
const factorial = getFactorial(5);
console.log(factorial); */ 

/* function fibonucci(num){

let fibo = [0,1];
for (let i = 2; i<= num; i++){

fibo[i] = fibo[i-1] + fibo[i-2];

}
return fibo;
}
const fiboNumber = fibonucci(5);
console.log(fiboNumber); */


/* function fibonucci(n){

if(n==0){
    return [0];
}

if(n==1){
    return [0,1];
}
const fibo = fibonucci(n-1);
fibo[n] = fibo[n-1] + fibo[n- 2];

return fibo;
}
    
    const fiboNumber = fibonucci(50);
    console.log(fiboNumber); */

/* function myFunction(number){
let unique = [];
for(let i = 0; i <number.length; i++){
    const elemnt = number[i];
    if(unique.indexOf(elemnt) == -1){
        unique.push(elemnt);
    }
}
return unique;
}
const arrayNumber = myFunction([14,15,15,14,24,87,94,75,46,24]);
console.log(arrayNumber); */


 /*const numbers = [10, 20, 25, 40, 35, 75, 85];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    let elemnt = numbers[i];
    sum = sum + elemnt;
}
console.log(sum);*/

/* function myFunction(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++ ){
        let elemnt = array[i];
        sum = sum + elemnt;
    }
return sum;
}
const arrayNumber = myFunction([4,4,5,3]);
console.log(arrayNumber) */

/* function myFunction(number){
let arr = [];
for(let i = 0; i < number.length; i++){
    let elemnt = number[i];
if(arr.indexOf(elemnt) == -1){
    arr.push(elemnt)
}
    }

return arr;
}
const arrayNumber = myFunction([14,155,155,14,16,18,1,9,-8]);
console.log(arrayNumber); */

/* function myFunction(array){
let arr = [];
for(let i = 0; i < array.length; i++){
    let elemnt = array[i];
    if(arr.indexOf(elemnt) == -1){
        arr.push(elemnt);
    }
}
return arr;
}
console.log(myFunction(['habul','abul','babul','habul','kabul','abul','cabul','babul'])); */

/*let name = 'mahfujur rahman';
let roll = 15;
let areYouStudent = true;
console.log(typeof roll)*/

/* const name = 'Mahfujur Rahman';
let roll = 14;
name = 25;
console.log(name); */

/* let num1 = 5;
let num2 = 3;
let multipy = num1 * num2;
let devided = num1 / num2;
let total = num1 +num2;
console.log(multipy)
console.log(parseInt(devided))
console.log(total) */

/* let num1 = 5;
let num2 = 3;
console.log(num2 > num1) */


/* let num1 = 5;
let num2 = 3;
let num3 = 14;
let num4 = 9;
let num5 = 2;

if(num1 > num2 || num3 < num4){
    console.log('valo')
} */
/* 
let audiPrice = 50;
let bmwPrice = 100;
let mercedesPrice = 80;
let toyotaPrice = 75;
if(audiPrice > bmwPrice){
    console.log('audi kinbo');
}
else if(bmwPrice > mercedesPrice){
    console.log('bmw kinbo');
}
else if(mercedesPrice > totyotaPrice){
    console.log('mer kinbo');
}
else{
    console.log('gari kinbo na')
} */

/* let i = 7;
while(i <= 19){
console.log(i)
i+=2;
} */

/* let array = ['mahi','rahi','ohi','sami','kahi'];
const a = array.indexOf('mah');
console.log(a); */

/* let array = ['mahi','rahi','ohi','sami','kahi'];
for(let i=0; i < array.length; i++){
let elemnt = array[i];
console.log(elemnt);
}
 */

/* function myFunction(num1,num2,num3){

let multipli = num1 * num2 * num3;
return multipli;
}
const number = myFunction(5,5,5);
console.log(number) */
/* 
let student = {
name: 'mahfuj',
roll:15,
class:8,


}
student["name"] = 'mahi';
console.log(student.name)
 */

/* let array = [50,60,80,90,85,46,79,120,100,110,140,81,84,740];
for(let i = 0; i < array.length; i++){
let elemnt = array[i];
if(elemnt >= 80){
console.log(elemnt);
}
} */

/* function feetToInch(feet){
const inch = feet * 12;
return inch
}
const numberOffeet = feetToInch(4);
console.log( numberOffeet);
 */

/* function centimeterToMeter(centimeter){

    const meter = centimeter / 100;
    return meter;

}
const numberOfmeter = centimeterToMeter(500);
console.log(numberOfmeter); */

/* function pageRequirments(book1,book2,book3){
const book1Needpage = book1 * 100;
const book2Needpage = book2 * 200;
const book3Needpage = book3 * 300;
const totalPage = book1Needpage + book2Needpage + book3Needpage;
return totalPage
}
const printBook = pageRequirments(3,22,4);
console.log(printBook);*/

/* function bestFriend(friendsName){

let biggestName = friendsName[0];

for(let i = 0; i < friendsName.length; i++){
let elemnt = friendsName[i];
if(elemnt.length > biggestName.length){
  biggestName = elemnt;
}
}
return biggestName;
}

const name1 = bestFriend(['mahi','fahimsad','mahfuj','ali','asifhossain']);
console.log(name1); */

/* const array = [10,15,-1,20,1,4,5,4,-8,68,47,14,20,10,-25,-14,-5];

for(let i = 0; i < array.length; i++){

let elemnt = array[i];
if(elemnt < 1){
break;
}
console.log(elemnt);
} */

/* const array = [10,15,15,10,20,1,4,5,4,-8,68,47,14,20,10,-25,-14,-5];
function myFunction(array){
const arr = [];
for(let i = 0; i < array.length; i++){

  let elemnt = array[i];
  if(elemnt < 1){
      break;
  }

arr.push(elemnt)

}
return arr;
}
const ar = myFunction(array);
console.log(ar) */


/* function myFunction(number){

if(number == 0){
    return [0];
}
if(number == 1){
    return [0,1];
}


let fibo =myFunction(number - 1);
fibo[number] = fibo[number-1] + fibo[number-2];  


return fibo
}
    const ar = myFunction(5);
    console.log(ar)  */

/* function myFunction(number){

 let factorial = 1;
 for(let i =1; i<=number; i++){
    factorial = factorial * i;
 }
        
return factorial;
}
const ar = myFunction(5);
console.log(ar);  */

/* function myFunction(number){

if(number == 1){
    return 1;
}
    
return number * myFunction (number - 1);
}
const ar = myFunction(5);
console.log(ar);  */

/* function myFunction(number){

    let factorial = 1;
    for(let i = number; i >= 1; i--){
       factorial = factorial * i;
    }
           
   return factorial;
   }
   const ar = myFunction(5);
   console.log(ar);   */


/* function  perfectFriend(friendsName){

let largestName = 0; 
    
 for(let i = 0; i < friendsName.length; i++){         
 let elemnt = friendsName[i];
 if(elemnt.length == 5){
    largestName = elemnt;
    break;
}
}
return largestName;

}
const friendsArray = perfectFriend([ ]);
console.log(friendsArray); */

 /* unction deliveryCost(quantity){
    //Assigning Essenial Variables
const costLvl1 = 100 * 100;
const costLvl2 = costLvl1 + (quantity - 100) * 80;
const costLvl3 = costLvl1 + 100 * 80 + (quantity - 200) * 50;

    //Conditions for unwanted input and the functions condition
if(quantity < 0 || typeof quantity == 'string'){
    return 'Input cannot be negative number or a string';
}
else if(quantity <= 100){
    return quantity * 100;
}
else if(quantity > 100 && quantity <= 200){
    return costLvl2;
}
else{
   return costLvl3;
}
}
const x = deliveryCost(58);
// console.log(x)  */

// problem 1
/*
function seerToMon(seer){
    if(seer < 1){
    return 'Please put the number above 1'; // if he/she give the number less than 1 then the funnction alert him.
    }
    else if(typeof(seer) != 'number'){
    return 'string or boolean not allow, please give a number !'; // if he/she give the string or boolean then the funnction alert him.
    }
    let mon = seer / 40; // 1 mon = 40 seer
    return mon;
    }
    const monQuantity = seerToMon(40);
    console.log(monQuantity);
    // problem 2
    function totalSales(shirts,pants,shoes){
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoePrice = 500;
    if(shirts < 1 || pants < 1 || shoes < 1){
    return 'Please put the number above 1'; // if he/she give the number less than 1 then the funnction alert him.
    }
    else if(typeof(shirts) != 'number' || typeof(pants) != 'number' || typeof(shoes) != 'number' ){
    return 'please give a number !'; // if he/she give the string or boolean then the funnction alert him.
    }
    const shirtQuantity = shirtPrice * shirts;
    const pantQuantity = pantPrice * pants;
    const shoeQuantity = shoePrice * shoes;
    const totalSellPrice = shirtQuantity + pantQuantity + shoeQuantity;
    return totalSellPrice;
    }
    const quantity = totalSales(0,0,0);
    console.log(quantity);
    // problem 3
    function deliveryCost(quantity){
    // declare a varible
    const firstCostLevel = 100 * 100;
    const secondCostLevel = firstCostLevel + (quantity - 100) * 80;
    const thirdCostLevel = firstCostLevel + 100 * 80 + (quantity - 200) * 50;
    if(quantity < 1){
    return 'Please put the number above 1'; // if he/she give the number less than 1 then the funnction alert him.
    }
    else if(typeof(quantity) != 'number'){
    return 'please give a number !'; // if he/she give the string or boolean then the funnction alert him.
    }
    else if(quantity <= 100){
    const totalCost = 100 * 100;
    return totalCost;
    }
    else if(quantity > 100 && quantity <= 200){
    return secondCostLevel;
    }
    else{
    return thirdCostLevel;
    }
    }
    const shirtsQunatity = deliveryCost(700);
    console.log(shirtsQunatity);
    // problem 4
    function perfectFriend(friendsName){
    if(typeof(friendsName) != 'object'){ // if you cannot use object then the function alert you.
    return 'please give object !';
    }
    //If you put a number or an element inside the object, the output will be zero
    let largestName = 0;
    for(let i = 0; i < friendsName.length; i++){
    let elemnt = friendsName[i];
    if(elemnt.length == 5){ //when friend name length 5 then loop is stop.
    largestName = elemnt;
    break;
    }
    }
    return largestName;
    }
    const friendsArray = perfectFriend(['mahfuj','rahim','ohi','fahim']);
    console.log(friendsArray); */

/* function myFunction(num){
let arr = [];
for(let i = 0; i < num.length; i++){
let elemnt = num[i];
if(arr.indexOf(elemnt) == -1){
    arr.push(elemnt)
}

}
return arr;
}
const ans = myFunction([10,15,10,10,15,16,19,5,4,17,-15,5,4]);
console.log(ans); */ 


/* function myFunction(num){

let factorial = 1;
for(i = 1; i <= num; i++){
    factorial = factorial * i;
}
    return factorial;
}
    const ans = myFunction(5);
    console.log(ans); */

/* function myFunction(n){
if(n == 1){
    return 1;
}

return n *  myFunction(n-1);
 }
const ans = myFunction(5);
console.log(ans); */

/* function myFunction(n){

let fibo = [0,1];

for(let i = 2; i <= n; i++){ 

fibo[i] = fibo[i-1] + fibo[i-2];
}

return fibo;
}
const ans = myFunction(5);
console.log(ans); */
/* function myFunction(n){

if(n == 0){
    return [0];
}
if(n == 1){
    return [0,1];
}

let fibo = myFunction(n-1);
fibo[n] = fibo[n-1] + fibo[n-2];

return fibo;
}
    const ans = myFunction(500);
    console.log(ans); */


/*     function myFunction(number){
        let factor = 1;
        for(let i = number; i >= 1; i--){
            factor = factor * i;
        }
        return factor;
        }
        let firstFactor = myFunction(123);
        console.log(firstFactor);
*/
/* let s = " javascriptloops ";

for(const single of s){

if(single == "a"){ 
    console.log(single);
}
else if(single == "e"){
    console.log(single);
}
else if(single == "i"){
    console.log(single);
}
else if(single == "o"){
    console.log(single);
}
else if(single == "u"){
    console.log(single);
}
else if(single == 'p'){
    console.log(single)
}
} */
/* var text = "1234";
function reverseString(string) {

    let reverse = '';

    for (const letter of string){


    reverse =  letter + reverse ;
  
    }

    return reverse;
}

const ans = reverseString(text);
console.log(ans); 
console.log(typeof(text)); */

/* const phones = [
    {name:'samsung s5', price: 45000, camera: 24, storage: 32},
    {name:'walton', price: 25000, camera: 15, storage: 22},
    {name:'nokia', price: 35000, camera: 10, storage: 16},
    {name:'huwai', price: 29000, camera: 12, storage: 12},
    {name:'motorwala', price: 18000, camera: 8, storage: 8},
    {name:'xioami', price: 6000, camera: 4, storage: 4},
]
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest); */

/* function recursive(n){
    if(n==1){
        return 1;
    }
    return n + recursive(n-1);

}
console.log(recursive(6)); */

/* let array = [50,60,80,90,85,46,79,120,100,110,140,81,84,740];
for(let i = 0; i < array.length; i++){
let elemnt = array[i];
if(elemnt >= 80){
console.log(elemnt);
}
} 
 */
/* const products = [
    {name:'samsung s5', price: 45000, camera: 24, storage: 32},
    {name:'walton', price: 25000, camera: 15, storage: 22},
    {name:'asus laptop', price: 45000},
    {name:'smart watch', price: 18000},
    {name:'watch', price: 5000},
    {name:'huwai', price: 29000, camera: 12, storage: 12},
    {name:'motorwala', price: 18000, camera: 8, storage: 8},
    {name:'xioami', price: 6000, camera: 4, storage: 4},
]
function searchFunction(items,search){
let match = [];
for(const product of items){
    const name = product.name;
if(name.indexOf(search) != -1){
    match.push(product);
}
}
return match;
}
const matchProduct = searchFunction(products,'samsung');
console.log(matchProduct) */

/* function myFunction(num){
if(num==1){
    return 1;
}
return num * myFunction(num-1);

}
console.log(myFunction(6)) */

/* function myFunction(n){
if(n==0){
    return 0;

}
if(n==1){
    return 1;
}

return myFunction(n-1) + myFunction(n-2);

}
console.log(myFunction(8)) 
*/
/* 
const products = [
    {name:'samsung s5', price: 45000, camera: 24, storage: 32},
    {name:'walton', price: 25000, camera: 15, storage: 22},
    {name:'asus laptop', price: 45000},
    {name:'smart watch', price: 18000},
    {name:'watch', price: 5000},
    {name:'huwai', price: 29000, camera: 12, storage: 12},
    {name:'motorwala', price: 18000, camera: 8, storage: 8},
    {name:'xioami', price: 6000, camera: 4, storage: 4},
]

let match = [];

searchProduct = (items, search) => {
  

for(const product of items){
    let name = product.name;
    if(name.indexOf(search) != -1){
        match.push(product);
    }
}

return match;
}
console.log(searchProduct(products,'watch'));


const array = [20,25,40,6,4,7,8,9,251,45,30,25,14,48,64];

largestOfarray = (array) =>{

let largest = array[0];
for(elemnt of array){

if(elemnt > largest){
    largest = elemnt;
}
}
return largest;
}
console.log(largestOfarray(array));


fibonacci = (fiboNumber) =>{

let fibo = [0,1];
for(let i = 2; i <= fiboNumber; i++){

fibo[i] = fibo[i-1] + fibo[i-2]

}

return fibo;
}
console.log(fibonacci(5));

 */

// const numbers = [10, 20, 25, 40, 35, 75, 85];
// console.log(typeof(numbers));



/* function deliveryCost(quantity){

const firstCount = 100 * 100;
const secondCount = firstCount + (quantity - 100 ) * 80;
const thirdCount = firstCount + 100 * 80 + (quantity-100) * 50;
if(quantity <= 100){
    return quantity * 100
}
else if(qunatity > 100 || quantity <=200){
    return secondCount;
}
else{
return thirdCount;

}
} */

/* const products = [
    {name:'samsung s5', price: 45000, camera: 24, storage: 32},
    {name:'walton', price: 25000, camera: 15, storage: 22},
    {name:'asus laptop', price: 45000},
    {name:'smart watch', price: 18000},
    {name:'watch', price: 5000},
    {name:'huwai', price: 29000, camera: 12, storage: 12},
    {name:'motorwala', price: 18000, camera: 8, storage: 8},
    {name:'xioami', price: 6000, camera: 4, storage: 4},
]

function myFunction(products,search){

const match = [];

for(let i = 0; i <products.length; i++){
let product = products[i];
const name = product.name;

if(name.indexOf(search) != -1){
    match.push(product)
}
}
return match;

}
console.log(myFunction(products,'samsung')); */

/* 
const array = [10,15,14,16,1,9,7,8,4,40,51,64,78];
function myFunction(array){
let largest = array[0];
for(const elemnt of array){
    if(elemnt > largest){
        largest = elemnt;
    }
}
return largest;
}
console.log(myFunction(array)); */

/* function myFunction(fact){

    let factorial = 1;
    for(let i = 1; i <= fact; i++){
factorial = factorial * i;
    }

return factorial;

}
console.log(myFunction(7)); */

/* let fibo = [0,1];
for(let i = 2; i < 5; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo) */

/* function myfuntion(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    const fibo = myfuntion(n-1);
fibo[n] = fibo[n-1] + fibo[n-2];
return fibo;
}
console.log(myfuntion(5)) */
/* const product = 5; 
const price = ‘7’; 
const subTotal = product * price; 
const tax = subTotal/10; 
const total = subTotal + tax; 
console.log(total) */

/* function myfuntion(){
    console.log(25);
}
myfuntion() */

const numbers = [10, 20, 25, 40, 35, 75, 85];

for (const elemnt of numbers){
 console.log(elemnt);

}