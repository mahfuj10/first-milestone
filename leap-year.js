// how to check leap year




function myFunction(year){
if((year % 4 == 0 && year %100 != 0 || year % 400 ==0)){
    return true;
}
else{
    return false;
}

}
let leapYear = myFunction(2028);
console.log("Is the year leapyear", leapYear);