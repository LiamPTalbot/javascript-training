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