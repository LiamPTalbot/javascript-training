// data manipulation

let example_sentence = 'this is a string'

//parameters
//length
let string_length = example_sentence.length //length is a parameter of the string

console.log('Value at the end of the string = ', example_sentence[string_length -1])

let combined_string = 'hello world' + ' ' + 'my name is Liam'
console.log(combined_string)

//methods
//indexof
const contains_the_letter_a = example_sentence.indexOf('a') //.indexOf is a method of a string
console.log('Sentence contains the letter? ', contains_the_letter_a)

//split
const split_sentence = example_sentence.split(' ')
console.log(split_sentence)

//includes
const includes_in_sentence = example_sentence.includes('a')
console.log(includes_in_sentence)

//replace
example_sentence = 'this_is_a_string'

const replace_single_in_sentence = example_sentence.replace('_',' ')
console.log(replace_single_in_sentence)

const replace_all_in_sentence = example_sentence.replaceAll('_',' ')
console.log(replace_all_in_sentence)

//slice
const slice_sentence = example_sentence.slice(5,7)
console.log(slice_sentence)

//arrays and lists

//create
let simple_array = ['Liam', 'is', 'cool']

//read
console.log(simple_array[1])

//update
console.log(simple_array)
simple_array[1] = 'hello'
console.log(simple_array)

//update - pop push shift unshift
simple_array.push('pushed_word')
console.log(simple_array)
simple_array.pop()
console.log(simple_array)

let check = simple_array.includes('Liam')
    if (check == true) {
        console.log('Found Liam in Array')
    } else {
        console.log('Liam not in Array')
    }

//alpha sort
sorted = simple_array.sort()
console.log(simple_array)

//nested arrays
let nested_array = [[[3],[]],[[],[]]]
console.log(nested_array[0][0][0])

//looping over 2D Arrays
let twod_array = [[1,2], [3,4]]

for (let i = 0; i < twod_array.length; i++) {
    let sub_array = twod_array[i]
    for (let j = 0; j < sub_array.length; j++) {
        console.log(i,j, twod_array[i][j])
    }
}

//deleting values in an array
let deleted_array = [1,2,3,4,5]

let start_array = deleted_array.slice(0,2)
let end_array = deleted_array.slice(3)

let new_filtered_array = start_array.concat(end_array) //.concat method concatenates two arrays

console.log(new_filtered_array)

//if you want to delete every iteration of a number
let test_array = [1,4,3,7,4]

let index_of_three = test_array.indexOf(3) //find the 3
let first_array = test_array.slice(0,index_of_three) //slice up to the 3
let last_array = test_array.slice(index_of_three + 1) //slice after the 3

let filtered_array = first_array.concat(last_array) //.concat method concatenates two arrays

console.log(filtered_array)

//objects (dictionaries) - contain key:value pairs. items within are mutable, const objects are imutable

//creating an object
const bio = {
    name: 'Liam',
    age: 35,
    hobbies: ['coding','family','nature','pubs']
}

let name_key = bio['name'] //when calling an item from an object you need to use string quotations
console.log(name_key)

let new_name = 'name'
bio[new_name] = 'Henry'

console.log(bio['name'])

//creating an item
bio['friends'] = 0
console.log(bio)

//checking if item in object
console.log('age' in bio) //returns a boolean

 //.dot notation is a lot easier and equivalent to [] notation

 bio.age = 36
 console.log(bio.age)
 console.log(bio.hobbies[2])

 //deleting items in objects
 delete bio.age
 console.log(bio)

 //nested objects
 const me = {
    name: 'liam',
    age: 35,
    friends: {
        'joe': {
            description: 'grumpy'
        }
    }
 }

 me['friends']['joe']['description']
 console.log( me['friends']['joe']['description'])

 //again with .dot notation
 me.friends.joe.description = 'happy'
 console.log(me.friends.joe.description)

 //Object.keys(object) - returns an array of keys in your object - NEEDS TO BE CAPITAL (O)bject
 const keys_in_object = Object.keys(bio)
 console.log(keys_in_object)

 //Object.values(object) - returns an array of values in your object - NEEDS TO BE CAPITAL (O)bject
 const values_in_object = Object.values(bio)
 console.log(values_in_object)

  //Object.entries(object) - returns an array of entries in your object - NEEDS TO BE CAPITAL (O)bject
  const entries_in_object = Object.entries(bio)
  console.log(entries_in_object)

