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
// for Javascript //, # for Python, /* for CSS */, <!-- for HTML -->
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
// -- While loop - less common
let i = 0
while (i < 20) {
    console.log('The value of i = ', i)
    i++
}

// -- For loop - circular parenthesis takes 3x arguments (counter variable; when to exit; increment)
for (let j = 0; j < 20; j++){
    console.log(j)
}


// -- Continue & break

// 9.0 Functions
// -- Create a function
// -- Invoke a function
// -- Return
// -- Default inputs
// -- Arrow functions