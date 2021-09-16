//how to check index in array
var nam = ['mah', 'ohi', 'sha', 'hasan', 'husain'];
var index = nam.indexOf('hasan'); //index of hasan elemnt
console.log(index);

// Add elemnt array
var nam = ['Rahim', 'Ohi', 'Shafin', 'Hasan', 'Hussain'];
nam[1] = 'mahfuj';
console.log(nam);

// sum in array

const numbers = [10, 20, 25, 40, 35, 75, 85];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let elemnt = numbers[i];
    sum = sum + elemnt;
}
console.log(sum);

// sum of all elemnt in array by function

function arrayTotal(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const elem = num[i];
        sum = sum + elem;
    }
    return sum;
}
const array = [5, 2, 3, 2, 1, 10, 10, 15, 5];
const total = arrayTotal(array);
console.log(total);

// find lergest elemnt in arrray

function leargestArrayElements(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
let arrayElement = leargestArrayElements([501, 20, 14, 89, 45, 78, 66]);
console.log(arrayElement);

/////////////////////////////////////
function leargestArrayElements(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
let arrayElement = leargestArrayElements([-11, -5, -17, -15]);
console.log(arrayElement);


// find duplicate in array

let array = [5, 4, 6, 8, 7, 2, 5, 4, 1, 6, 8, 7];
function duplicate(array) {

    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let elemnt = array[i];
        if (arr.indexOf(elemnt) == -1) {
            arr.push(elemnt);
        }
    }
    return arr;
}
const arrayNumber = duplicate(array);
console.log(arrayNumber);


// Find the cheapest phone from an array of phone objects
const phones = [
    { name: 'samsung s5', price: 45000, camera: 24, storage: 32 },
    { name: 'walton', price: 25000, camera: 15, storage: 22 },
    { name: 'nokia', price: 35000, camera: 10, storage: 16 },
    { name: 'huwai', price: 29000, camera: 12, storage: 12 },
    { name: 'motorwala', price: 18000, camera: 8, storage: 8 },
    { name: 'xioami', price: 6000, camera: 4, storage: 4 },
]
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);







// find smallest elemnt in array
/*
const array = [5,14,6,21,3,4,-5,7,-85];
const min = Math.min(...array);
console.log(min);*/
