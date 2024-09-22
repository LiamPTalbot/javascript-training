// 1. Write a Javascript Class named Rectangle that has two properties width and height, initialised through its constructor.
// then initiate an object of rectangle with a width of 5 and a height of 10.

class Rectangle {
    //class body
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        console.log(this.width * this.height)
    }
}

const photo_frame = new Rectangle(5, 10)
console.log(photo_frame)
photo_frame.area()

// 2. How do you create a constructor within a class named Circle that initialises a property radius
// and sets its value based on the argument passed when a new Circle instance is created?
// Create an instance of Circle with a radius of 4.

class Circle {
    constructor(radius) {
        this.radius = radius
    }
}

const new_circle = new Circle(4)
console.log(new_circle)


// 3. Explain how you would add a method named calculated_area to the Rectangle class that calculates the area of the rectangle
// how does this method get added to the prototype and how can all isntances of the rectangle access it?

// area() {
//     console.log(this.width * this.height)
// }
// photo_frame.area()

// 4. In the context of a class method in javaScript what does the this keyword refer to and how would you use it inside a method
// named describe in a class Person to access the instance's properties named name and age?
// refers to the NEW instance of the class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    describe() {
        console.log('This peron is called  ' + this.name + ' and their name is '+ this.age)
    }
}

const my_new_person = new Person ('James', 27)
my_new_person.describe()

// 5. Create a class named Animal with a constructor that initialises a property species.
// Then define a subclass named Dog that inherits from Animal and adds an additional property names in its constructor.
// How do instances of Dog acess methods defined on Animal's prototype?

class Animal {
    constructor(species) {
        this.species = species       
    }
}

class Dog extends Animal {
    constructor(species, breed) {
        super(species)
        this.breed = breed
    }
}

const spud = new Dog ('doggy', 'Jack Russel')
console.log(spud)

