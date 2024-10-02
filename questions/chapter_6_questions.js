
// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function hello_world() {
    await sleep(2000)
    console.log('Hello World')
}

// hello_world()


// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function test_api() {
    try {
        const res = await fetch ('https://api.example.com/nonexistent') //res is response from the endpoint URL
    } catch(err) {
        console.log('Error fetching data')
    }
}

//test_api()

// 3. Write an async function named fetchUserData that makes a GET request to 'https://the-one-api.dev/v2/books' using async/await. Log the response to the console, handling any errors that might occur.


async function fetch_user_data() {
    try {
        const res = await fetch ('https://the-one-api.dev/v2/books') //res is response from the endpoint URL
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.log('Error fetching data')
    }
}

//fetch_user_data()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await. Ensure you set the appropriate headers and catch any errors.

async function post_user_data() {
    try {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name: Liam})
            }
        const res = await fetch ('https://the-one-api.dev/v2/books', options ) //res is response from the endpoint URL
    } catch(err) {
        console.log('Error fetching data')
    }
}    