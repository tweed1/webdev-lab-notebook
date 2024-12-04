// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

let input = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('#output');

copy.addEventListener('click', handleClick);

function handleClick(event) {
    console.log('click event', event);
    output.textContent = input.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
let input2 = document.querySelector('#userInput2');
input2.addEventListener('input', handleInput);

let element = document.createElement('div');
element.setAttribute('class', 'output');
document.querySelector('#inputEventExample').append(element);

function handleInput(event) {
    console.log('click event', event);
    element.textContent = input2.value;
}
