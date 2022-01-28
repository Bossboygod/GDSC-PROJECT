function strCount(obj = {}) {
    const strings = 'abcdefghijklmnopqrstuvwxyz'
    for (let char in strings) {
        char = parseInt(char)
        obj[strings[char]] = char + 1
    }
}

const obj = {}
strCount(obj);
console.log(obj);
 
for (let i in obj) {
    console.log(i)
}

for (let keys of Object.keys(obj)){
    console.log(obj[keys])
}