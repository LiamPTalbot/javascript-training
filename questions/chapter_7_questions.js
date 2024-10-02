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
