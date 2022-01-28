class Animal {
    constructor(name, height) {
        this.name = name
        this.height = height
    }
    // setters
    setName(name) {
        this.name = name
    }

    setLegs(legs) {
        this.legs = legs
    }

    setHeight(height) {
        this.height = height
    }

    setIsMammal(isMammal) {
        this.isMammal = isMammal
    }

    // getters
    getName() {
        return this.name
    }

    getLegs() {
        return this.legs
    }

    getHeight() {
        return this.height
    }

    getIsMammal() {
        return this.isMammal
    }
}

class Cat extends Animal {
    constructor(name, height) {
        super(name, height)
    }

    setIsWild(isWild) {
        this.isWild = isWild
    }

    getIsWild() {
        return this.isWild
    }

    meow() {
        console.log('meow')
        return 'meow'
    }
}

class Dog extends Animal {
    constructor(name, height) {
        super(name, height)
    }

    bark() {
        console.log('bark')
        return 'bark'
    }
}

const animal = new Animal('animal', 1)
const cat = new Cat('cat', 1)
const dog = new Dog('dog', 1)
dog.bark()