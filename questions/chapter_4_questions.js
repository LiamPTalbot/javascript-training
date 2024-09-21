// 1. Basic DOM Manipulation: How do you select an element with the id= "main-title" and change it's text content to 'Welcome to the DOM World"

// first you need to link to the .js file in the <head> section of your HTML file <script src = "___" defer></script>
// Then you have to get the element in .js
let main_title = document.getElementById("main-title")
// once you have the element in .js you can use the .innerText method to change its value
main_title.innerText = "Welcome to the DOM World"

// 2. Event Handling: Write the JavaScript code to listen for a click event on a button with the ID submit-btn and alert "Button Clicked!".

// first you need to link to the .js file in the <head> with <script src = "___" defer></script>
// Then you need to get the element in .js
let submit_btn = document.getElementById("submit-btn")
// write a function that carries out the action.

submit_btn.addEventListener('click', submit_btn_effect)

function submit_btn_effect () {
    console.log("Button Clicked!")
}

// 3. Dynamic Styling: How can you change the background colour of a <div> with the class hightlight to yellow when a user hovers over it using JS

// select the div in JS

let colour_div = document.querySelector('.highlight')

colour_div.addEventListener('mouseover', change_of_colour)

function change_of_colour() {
    colour_div.style.background = 'yellow'
}

// 4. Element Creation and Insertion: Describe how to create a new <li> element, set its text content to "New Item", and append it to an existing <ul> with the id list-container

let list_container = document.getElementById('list-container')

let new_item = document.createElement('li')
new_item.innerText = 'New Item'
list_container.appendChild(new_item)        //.appendChild method allows you to add items to elements

// 5. Form Handling: Write a script to prevent the default submission of a form with the id form-example and instead console log the value of a text input field within the form when the submit button is clicked.

let form_example = document.getElementById('form-example')

function handle_form_example(event) {
    event.preventDefault()
    console.log(form_example.value)
}

form_example.addEventListener('submit', handle_form_example)

// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking on a <button> contained within a <div> that both have click event listeners attached.

let prop_btn = document.querySelector('button')

function stop_button_propagation(event) {
    event.stop_propagation()
}

prop_btn.addEventListener('click', stop_button_propagation)

// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring that if the class is present it gets removed, and if its not, it gets added?