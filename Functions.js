function FizzBuzz(Number,a,b){
    var i;
    for(i=1; i<=Number; i++){
        console.log(i);
    }
    if(Number % a === 0){
        return `Fizz`
    }else if(Number % b === 0){
        return `Buzz`
    }else if(Number % 3 === 0 && Number % 5 === 0 ){
        return `FizzBuzz`
    }else {
        return `${Number}`
    }
}
var Number = 20;
var a = 4
var b = 5
console.log(FizzBuzz(Number,a,b));





