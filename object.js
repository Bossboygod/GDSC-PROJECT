const myCar = {
    make: "Toyota",
    Model: "Prado Land Cruiser"
}
// Freezes the object myCar
Object.freeze(myCar);

// Returns the value of the Object
for (let x in myCar) {
    console.log(x)
}
// Returns the value of the Keys
for (let keys of Object.keys(myCar)){
    console.log(myCar[keys])
}

// Number 2
