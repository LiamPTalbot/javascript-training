// arrow functions

function my_function (input) {
    // code that is repeatable
}

const my_arrow_function = (input) => {
    console.log('Executed arrow function')
}

my_arrow_function()

// Ternary operator ?

let friends = ['lucy', 'gregothy']
let is_janice_friend

if (friends.includes('janice')) {
    is_janice_friend = true
} else {
    is_janice_friend = false
}

console.log(is_janice_friend)

let mates = ['liam', 'dave']
let is_liam_mate = mates.includes('liam') ? true : false // allows you to write one line if/else statements
console.log(is_liam_mate)

// optional chaining

const james = {
    hobbies: {
        skiiing: {
            pairs_of_skis: 1
        }
    }
}

console.log(james.hobbies.skiiing.pairs_of_skis)
console.log(james.hobbies.football?.pairs_of_boots) // put a ? after the object and it will return undefined if it doesn't exist

// object destructuring

let person = {
    name: 'james',
    age: 27
}

console.log(person.name, person.age) // this gets long to type out

let dog = {
    name: 'skippy',
    age: 7
}

const {name: dog_name, age} = dog // one line object destructure
console.log(dog_name, age)

// array destructuring

let old_array = [4, 5]
let value_1 = old_array[0]
let value_2 = old_array[1]
console.log(value_1, value_2) // too long to type out

let new_array = [6, 7]
let [value_3, value_4] = new_array
console.log(value_3, value_4)

// template literal string

let my_name = 'james'

console.log('hello my name is' + my_name + 'and I like 0.5')

console.log(`
    hello my name is ${my_name} 
    and I like the franction 1/2 which has a decimal value 
    of ${1/2}
    `)

// short circuits && ||
// AND &&

let person_dict = { name: 'jon'}
let person_name_2 = person_dict.name && 'jonny'

if (person_dict.name) {
    person_name_2 = 'jonny'
}

let person_name_3 = person_dict.name || 'default value' //sets a backup value

// enhanced object literals

let breed = 'corgi'
let animal = 'dog'

const animal_info = {
    breed: breed,
    animal: animal
}   // would be better if yo uonly had to write it once

let type_of_cat = 'siamese'
let type_of_feline = 'cat'

const cat_info = {
    type_of_cat,
    type_of_feline
}

// spread operator
let demo_array = [1,2,3,4,5]
let demo_array_2 = [...demo_array, 6,7,8]  // get all inner values with spread operator

let demo_object = {
    favourite_colour: 'blue'
}

let demo_object_2 = {
    ...demo_object,
    favourite_food: 'cookies and cream icecream'
}

let new_object = {
    ...demo_object
}

// array methods

let my_cool_array = [7, 21, 45, 5]

// for each method

my_cool_array.forEach((current_value, current_index) => {
    console.log(`The current value is: ${current_value} & the current index is ${current_index}`)
})

//map

let my_new_array = my_cool_array.map((current_value, current_index) => {
    return `the value is ${(current_value * 2)}`
})

console.log(my_new_array)

// filter

let filtered_array = my_cool_array.filter((current_value, current_index) => {
    let is_even = (current_value % 2 === 0)
    return !is_even
})

console.log(filtered_array)

// reduce

let reduced_array = my_cool_array.reduce((accumulator, current_value, current_index) => {
    return accumulator + `,${current_value}:${current_index}`
}, '')
console.log(reduced_array)

