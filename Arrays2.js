function  myOccurences(arrayOfStrings, myChar){

    // Remove the alphabet a from the array of strings
    arrayOfStrings = arrayOfStrings.map((x) => x.replace(myChar, ''));

    return arrayOfStrings;
}

console.log(myOccurences(['bugatti','toyota','honda','austonmartin','audi'], 'a'));
