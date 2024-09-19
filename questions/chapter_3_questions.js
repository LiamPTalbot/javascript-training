// 1. Array Fitlering - write a function that filters out all the even numbers from an array of integers.
// start with pseudo-code

// set up an array of integers
// define even numbers
// write a function that filters out even numbers
// write a function that checks if an integer is even
// loop that function over the array
// pass the array in to the function
// console.log the result

let array_of_integers = [0,1,2,3,4,5,6,7,8,9,10]

function remove_evens (N) {
    let array_of_odds = []
    for (let i = 0; i < N.length; i++) {
        if (i % 2 !== 0) {
            array_of_odds.push(i)
        }
    }
    return array_of_odds
}

console.log(remove_evens(array_of_integers))

// 2. Object manipulation: given an array of objects representing people with names and ages, write a function to find the person with the highest age.
// start with pseudo-code
// build an array of objects representing people with names and ages
// build a function to sort in age order
// 
// console.log the [o] object in the array

let array_of_people = [
    {
        name: 'Liam',
        age: 35
    },
    {
        name: 'Sheilla',
        age: 41
    },
    {
        name: 'Nydia',
        age: 75
    }
]

function oldest_person(arr) {
    let oldest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        new_person = arr[i];
        if (new_person.age > oldest.age) {
            oldest = new_person
        }
    } return oldest
}

console.log(oldest_person(array_of_people))

// 3. Convert an array of strings containing numbers into an array of actual number values.
// psuedo code
// create an array of strings containing numbers
// REMEMBER THE PARSEINT FUNCTION!

let array_of_strings = ['1','2','3']

function string_to_number (arr) {
    array_of_numbers = []
    for (let i = 0; i < arr.length; i++) {
        array_of_numbers.push(parseInt(arr[i]))
    }
    return array_of_numbers
}

console.log(string_to_number(array_of_strings))

// Write a function that sorts an array of Objects based on a specific property (e.g., 'price') in ascending order.
// create an array of objects
//write a function that sorts it on a key
// .sort(function(a,b) => a - b)

const shopping_list = [
    {
        item: 'eggs',
        price: 1.50
    },
    {
        item: 'bacon',
        price: 2.23
    },
    {
        item: 'bread',
        price: 0.99
    }
]

shopping_list.sort(function(a,b) {
    return a.price - b.price
})

console.log(shopping_list)

//5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
//pseudo code
//write an array
//slice off 0 and .length-1
//return the new array

let original_array = [1,2,3,4,5]
console.log(original_array.slice(1,-1))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total costs of the items.
// create an object.

const shopping_cart = {
    'cheese': {
        quantity: 3,
        price: 1
    },
    'bacon': {
        quantity: 1,
        price: 1.4
    },
    'eggs': {
        quantity: 2,
        price: 0.19
    }
}

function total_cost (obj) {
    let object_keys = Object.keys(obj)   //Object.keys(object) - returns an array of keys in your object - NEEDS TO BE CAPITAL (O)bject
    let sum = 0
    for (let i = 0; i < object_keys.length; i ++) {
        let current_key = object_keys[i]
        const key_data = obj[current_key]
        let product_total = key_data.price * key_data.quantity
        sum = sum + product_total
    }
    return sum
}

console.log(total_cost(shopping_cart))

// 7. Object manipulation: write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.
// pseudo
// create an object with nested elements and arrays
//write a copier function

let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function copier (obj) {
    let friend_copy = {}
    let obj_keys = Object.keys(obj)
    for (let i = 0; i < obj_keys.length; i ++) {
        let this_key = obj_keys[i]
        friend_copy[this_key] = obj[this_key]
    }
    return friend_copy
}

console.log(copier(friend))

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
// create an object of grades
// create a function that calculates the average

const student = {
    maths: {
        grade: 85
    },
    physics: {
        grade: 90
    },
    english: {
        grade: 76
    }
}

function grade_averager (obj) {
    let sum = 0
    let array_of_subjects = Object.keys(obj)
    for (let i = 0; i < array_of_subjects.length; i++ ) {
        current_subject = array_of_subjects[i]              //access students subject
        current_grade = obj[current_subject].grade          //access students subjects grade
        sum = sum + current_grade
    }
    return (sum / array_of_subjects.length)
}

console.log(grade_averager(student))

// 9. Scoper and Closure: Create a function that returns a new function. The returned function should remember and log the number of times its been called.

function inception () {
    let number_of_invocations = 0

    return function () {
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = inception()

incrementer()
incrementer()
incrementer()

// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g.., date) in descending order.
// pseudo
// write an array of objects
// write an function that sorts it based on a property in descending order

const pokemon = [
    {
        name: 'charezard',
        rarity: 100
    },
    {
        name: 'pikachu',
        rarity: 1
    },
    {
        name: 'meon',
        rarity: 38
    }
]

pokemon.sort(function(b,a) {
    return b.rarity - a.rarity
})

console.log(pokemon)
