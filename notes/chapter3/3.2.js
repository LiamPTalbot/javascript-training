//scope, closures, modular code and error handling
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

module.exports = {
    
}
