// find the bigger number

/*let first = 450;
let second = 550;
let third = 550;

if(first > second && first > third){
    console.log('first is bigger ');
}
else if(second > first && second > third){
    console.log('second is bigger ');
}
else{
    console.log('third is bigger ');
}*/

/*function maxNumber(first,second,third){

    if(first > second && first > third){
        return 'first is bigger ';
    }
    else if(second > first && second > third){
        return 'second is bigger ';
    }
    else{
       return 'third is bigger ';
}
}
let number = maxNumber(15,8,6);
console.log(number);*/

// find small number

function maxNumber(first,second,third){

    if(first < second && first < third){
        return 'First number is small';
    }
    else if(second < first && second < third){
        return 'Second number is small';
    }
    else{
       return 'Third number is small';
}
}
let number = maxNumber(5,3,7);
console.log(number);