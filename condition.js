// var audiPrice = 75000;
// var mercedesPrice = 50000;
// var bmwPrice = 60000;
// var mustangiPrice = 55000;
// var totyotaPrice = 35000;
// var myPrice = 00;

// if(audiPrice < myPrice){
//     console.log("I wanna buy a Audi car");
// }
// else if(mercedesPrice < myPrice){
//     console.log('I wanna buy a mercedes car');
// }
// else if(bmwPrice < myPrice){
//     console.log('I wanna buy a bmw car');
// }
// else if(mustangiPrice < myPrice){
//     console.log('I wanna buy a mustang car');
// }
// else if(totyotaPrice < myPrice){
//     console.log('I wanna buy a Toyota car');
// }
// else if(mustangiPrice < myPrice){
//     console.log('I wanna buy a mustang car');
// }
// else{
//     console.log('i cannot buy a car');
// }

var audiPrice = 100;
var bmwPrice = 80;
var toyotaPrice = 50;
var myBujet = 5;
if(myBujet >= audiPrice){
    if(myBujet > 120 ){
        console.log('buy a audi a6');
    }
    else if(myBujet > 100){
        console.log('buy a a5');
    }
    else if(myBujet > 80){
        console.log('buy a audi a4')
    }
    else{console.log('buy a audi a3')};
}
else if(myBujet > bmwPrice){
    console.log(' buy a bmw 5 series');
}
else if(myBujet > 50){
    console.log('buy a premio');
}
else(
    console.log('cannot buy a car')
)
