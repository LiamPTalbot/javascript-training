//1. How do you create a string that includes both static text and the value of the variable name, using template literals?

let name_of_dog = 'Skippy'
let special_string = `The name of your dog is ${name_of_dog}`
console.log(special_string)

//2. convert the following function in to an arrow function syntax.
function add(a,b) {
    return a + b
}

let arrow_version = (a,b) => {
    return a + b
}
console.log(arrow_version(1,2))

//3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.

const person = {
    name: 'liam',
    age: 35
}

const {name, age} = person
console.log(name, age)

//4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

let colors = ['red', 'green', 'blue']
let [first, second, third] = colors
console.log(first, second, third)

//5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?

let arr1 = [1,2,3]
let arr2 = [4,5,6]
const sum_array = [...arr1,...arr2]
console.log(sum_array)

//6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj1 overwriting those in obj1 if they exist in both objects?

let obj1 = {
    name: 'liam',
    age: 35
}

let obj2 = {
    name: 'sheilla',
    hair: 'black'
}

let combined_object = {
    ...obj1,
    ...obj2
}
    
console.log(combined_object)

//7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?

const user = {
    name: 'liam',
    location: {
        town: 'bristol',
        area: 'emersons green'
    }
}

console.log(user.location.town)
console.log(user.location?.street)      // the ? has to come after the last known entity to say query the sub-entities

//8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".

const greet = (name, greeting = "Hello") => {
    console.log(`${greeting} ${name}`)
}

greet("Liam", "Ahoy")
greet("Liam")

//9. Explain the difference between let and const and explain when you would use each?
// let can be changed but const cannot.

//10. Write a for...of loop tht iterates over an array numbers and logs each number to the console.

let numbers_array = [0,1,2,3,4]

for (let current_value of numbers_array) {
    console.log(current_value)
}

//11. Given an array of numebrs, use the map method to create a new array with each number squared.


