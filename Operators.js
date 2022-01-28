// A program that determines if a person can take alcohol
function person(age){
    if(age >= 18){
        console.log('You are eligible to take alcohol');
    }else{
        console.log('You are not eligible to take alcohol');
    }
}
const age = 18;
console.log(person(age));


function myWord(word){
   if(length % 7 === 0){
       console.log(length);
    }else if(length % 3 === 0){
        console.log(length / 2)
    }
    else if(length % 4 === 0){
        console.log(length / 4)
    }else{
        console.log('Impossible')
    }
}

 const word = 'olumaguire';
 let length = word.length;
 console.log(myWord(word));