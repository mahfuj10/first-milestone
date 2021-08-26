
// problem 1

function seerToMon(seer){
if(seer < 1){
    return 'Please put the number above 1';  // if he/she give the number less than 1 then the funnction alert him. 
}
else if(typeof(seer) != 'number'){ 
    return 'string or boolean not allow, please give a number !';   // if he/she give the string or boolean then the funnction alert him. 
}
let mon = seer / 40; // 1 mon = 40 seer  
return mon;

}
const monQuantity = seerToMon(0);
console.log(monQuantity);





// problem 2
function totalSales(shirts,pants,shoes){

    let shirtPrice =  100;
    let pantPrice =  200;
    let shoePrice =  500;
    
    if(shirts < 1 || pants < 1 || shoes < 1){
    return 'Please put the number above 1';  // if he/she give the number less than 1 then the funnction alert him.
    }
    else if(typeof(shirts) != 'number' || typeof(pants) != 'number' || typeof(shoes) != 'number' ){
    return 'please give a number !';   // if he/she give the string or boolean then the funnction alert him. 
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
    return 'Please put the number above 1';  // if he/she give the number less than 1 then the funnction alert him.
    }
else if(typeof(quantity) != 'number'){
    return 'please give a number !';   // if he/she give the string or boolean then the funnction alert him. 
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
const shirtsQunatity = deliveryCost(1);
console.log(shirtsQunatity);




// problem 4
function  perfectFriend(friendsName){
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
    console.log(friendsArray);

