// all we have used so far is functional programming
// there's another way is modern OOP with classes, constructors and inheritance
// how to define and instantiate classes and utilise properties with constructors.
// understand the prototype chain and how objects inherit properties and methods.
// the 'this' keyword.

const me = {
    name: 'liam',
    age: 35
}

class Person {
    //class body
    constructor(name, age) {
        this.name = name    // name is a property of the class
        this.age = age
    }

    greet() {
        console.log('Hello my name is ', this.name)
    }
} 

const you = new Person('rufus', 34)
const them = new Person('doloris', 1)

console.log(you)
console.log(them)
console.log(them.age)
them.greet()

class Gamer extends Person {
    constructor (name, age, videogame) {
        super(name, age)
        this.videogame = videogame
    }
}

const nerdy_guy = new Gamer ('harold', 31, 'pokemon')
nerdy_guy.videogame = 'world of warcraft'

console.log(nerdy_guy)

// getters and setters
class my_class {
    constructor(name) {
        this._name = name
    }
    get name() {
        console.log('Fetched new name')
        return this._name
    }
    set name(value) {
        this._name = value
    }
}

const obj = new my_class('Lucy')
console.log(obj.name)
obj.name = 'gregothy'
console.log(obj.name)

//class setup has to come first and then you call it afterwards