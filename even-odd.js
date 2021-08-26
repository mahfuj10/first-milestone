// check even

function myfunction(number){

if(number %2 == 0){
    return true;
}
else{
    return false;
}
}

var theNumber = myfunction(4);
console.log('Is the number even',theNumber);


//check odd
function myFunction(number){
     if(number %2 != 0){
         return true;
     }
     else{
         return false;
     }
}
let theNumber = myFunction(7);
console.log('Is the number odd', theNumber);