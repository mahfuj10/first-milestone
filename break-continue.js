// breeak in while loop

var i=0;
while(i < 15){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
}

var numbers = [12, 15, 16, 14, 85, 25, 29];

for (var i = 0; i < numbers.length; i++){

    var number = numbers[i];

    if(number > 14){
    continue;
}
console.log(number);

}