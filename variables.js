function statement (name, age, adult=false) {
    if (age >= 18) {
        adult = true
       return `My name is ${name}, I'm ${age} years old and I'm an adult`
    } else {
        adult = false
        return `My name is ${name}, I'm ${age} years old and I'm not an adult`
    }
}
console.log(statement('Joshua', 18));
