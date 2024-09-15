// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal - (Ctrl + `) to open terminal
// -- Running a file
// -- Killing a file

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("Hello World")

// -- Variables
const my_sentence = "Hello World"

let number_of_eggs = 4 // let declaration allows us to reassign, const does not

number_of_eggs = 6

console.log(number_of_eggs + 6, my_sentence)

// -- Code comments
// for Javascript //, # for Python, /* for CSS */, <!-- for HTML -->. Select all you'd like to comment and press 'Cmd + //' for JS comments
// -- Assignment by reference

let new_number_of_eggs = number_of_eggs
console.log(new_number_of_eggs)

// 4.0 Data Types (init / read / write)
// -- Strings
let my_string = "Hello my name is Liam"
let extended_string = my_string + ", how are you?"
console.log(extended_string)
console.log(extended_string[4]) //zero indexing

// -- Numbers
const favourite_number = 83

// -- Arrays
const grocery_list = [
    'apples',
    'pears',
    'oranges'
]
grocery_list[1] = 'eggs' // const makes variable mutable but if its an array or object the contents remain mutable
console.log(grocery_list[1])

// -- Objects
// also known as dictionaries. Use Key:Value pairs instead of a list (array)
const dictionary= {
    ocean: 'A body of water between continents',
    sea: 'A body of water between countries',
    lake: 'A landlocked body of water'
}
console.log(dictionary['sea']) //key needs to be a string
console.log(dictionary.ocean) //the .dot notation is a lot quicker
console.log(dictionary.lake, " ", dictionary.ocean) //you can concatenate object returns

dictionary.ocean = 'a mega big body of water' //redefine objects with .dot notation
dictionary['sea'] = 'a smaller body of water' //redefine objects with [dict] notation

console.log(dictionary) //print out the whole object

// -- Null
// represents the absence of information with a holding name
const unknown_number = null

// -- Undefined
const undefined_value = undefined
console.log(unknown_number, undefined_value)

// -- Booleans (true/false)
const is_liam_cool = true
let is_cabbage_delicious = false

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 1 + 1
console.log('Sum: ', sum)

const division = 12 / 5
console.log('Division: ', division)

const remainder = 12 % 5
console.log('Remainder: ', remainder)

// -- Logical operators (|| &&)
const y = 6
if (y > 10 && y < 20) {
    //whatver is executed in here is conditionally executed
    console.log("Value is beween 10 and 20")
} else {
    console.log("Value was not between 10 and 20")
}

const z = 6
if (z > 10 || z < 20) {
    //whatver is executed in here is conditionally executed
    console.log("Value is bigger than 10 or less than 20")
} else {
    console.log("Value was not bigger than 10 or less than 20")
}

// -- Type of
const random_number = 833
console.log(typeof random_number, typeof 'random stringy string')

// 7.0 Conditional Statements
// -- If else - circular parenthesis always expect an argument

const x = 6
if (x > 10) {
    //whatver is executed in here is conditionally executed
    console.log("Value greater than 10")
} else {
    console.log("Value is less than 10")
}

// 8.0 Loops
// -- While loop - never use
let i = 0
while (i < 20) {
    console.log('The value of i = ', i)
    i++
}

// -- For loop - circular parenthesis takes 3x arguments (counter variable; when to exit; increment) - use all the time
const animals = [
    'duck',
    'dog',
    'cat',
    'pig'        
]
console.log(animals)

for (let j = 0; j < animals.length; j++){
    const current_animal = animals[j]
    if (current_animal == 'dog') {  // equality operator ==
        continue                    // continue allows you to skip over an iteration
    }

    if (current_animal == 'cat') {  // equality operator ===
        break                       // break allows you to break out of the loop
    }
    const string_to_print = 'The animal at index: ' + j + ' And the value at that index is: ' + current_animal
    console.log(string_to_print)
} //the const string_to_print is local scope to the for loop. Animals is global scope as it's outside the for loop.

for (let j = 0; j < 20; j++){
    console.log(j)
}

// -- Continue & break. continue allows you to skip over an iteration. Break allows you to exit the loop.

// 9.0 Functions
// -- Create a function
// define the function
function print_square(y) {
    // This function prints out the square of a number
    console.log(y * y)
}
//invoke the function by calling it
print_square(4)

// define the function
function multiplier(y, z) {
    // This function prints out the multiplication of two numbers
    console.log(y * z)
}
//invoke the function by calling it
multiplier(4,2)

// -- Invoke a function
// -- Return
function add_strings(s1, s2) {
    const concat_string = s1 + s2
    console.log(concat_string)
    if (typeof s1 !== string || typeof s2 !== string) {
        return          // a retun alone just exits the function with no output - known as a 'guard clause'
    }
    return concat_string // the return is the output left in place of the execited function
}

const new_string = add_strings('Hello ', 'Liam')
add_strings('Hello ', 'world')
console.log('NEWSTRING: ', new_string)

// -- Default inputs
//function add_strings(s1 = 'Hello', s2 = 'World') {    - if user doesn't provide s1 s2 then it defaults to the hello World

// -- Arrow functions - takes less code/more efficient but don't need to use... - critical inputs are () inputs and {} logic () => {} is an arrow function. Needs a name.

const arrow_function = () => {} //most basic arrow function

const arg_function = (arg) => {
    console.log('ARG :', arg)
} 



