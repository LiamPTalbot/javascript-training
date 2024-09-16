
//scope, closures, modular code and error handling

const { print_square } = require("./3_functions_export") //auto added by intellisense as i exported them from another file

//closures
function counter() {
    let count = 0
    return function() {
        count ++
        console.log(count)
    }
}

let increment = counter()
increment()
increment()

//writing modular and reusable code
// if i want to make functions available across other files you need to export them as an object

print_square(2) //auto imported from another file

//try-catch logic - v common

const broken_object = {
    word: 'nice'
}

function problematic_code_block() {
    try {
        const sub_object = broken_object.hello.world
        console.log(sub_object)
    } catch (err) {
        console.log(err.message)
    }
}

problematic_code_block()
console.log('code continued to execute as we handled the error')


//throw a new error - not common
function throw_error() {
    try{
        throw new Error('custom error message')
    } catch (err) {
        console.log(err.message)
    }
}

throw_error()
console.log('code continued to execute as we handled the error')