function vowelsAndConsonants(s){
    let str='';
    for(var i=0; i<s.length ; i++)
    {
        if((s[i]=='a')||(s[i]=='e')||(s[i]=='i')||(s[i]=='o')||(s[i]=='u')){
            console.log(s[i]);
        }
        else{
            str=str.concat(s[i]).concat('\n');
        }
    }
    console.log(str)
}





var text = 'hello how are you';

function reverseString(string) {

    let reverse = '';

    for (const letter of string){ 


    reverse =  letter + reverse ;
  
    }

    return reverse;
}

const ans = reverseString(text);
console.log(ans);