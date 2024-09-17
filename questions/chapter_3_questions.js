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

function total_cost (arr) {
    sum = null;
    for (let i = 0; i < arr.length; i++) {
        item_total = (arr.quantitiy * arr.price)
        sum += item_total
    }
    return sum
}

console.log(total_cost(shopping_cart))