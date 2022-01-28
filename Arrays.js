function findAverage(arrayOfNumbers, x){

    // remove numbers less than x
    arrayOfNumbers = arrayOfNumbers.filter((n)=> n >= x);

    // find mean of remaining numbers
    const sumOfAllNumbers = arrayOfNumbers.reduce((a,b) => a+b);
    const mean = sumOfAllNumbers / arrayOfNumbers.length;

    //return mean
    return mean;
}

console.log(findAverage([1,2,3,4,5,6,7,8,9,10], 4));