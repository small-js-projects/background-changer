// constant variable that never change and are accessible anywhere in our code
const red = '#80ced6'
const blue = '#d5f4e6'
const green = '#f18973'
const pink = '#ff57b9'
const purple = '#a0a2ff'
const violet = '#6dfffa'

// Object populated with color values defined above
const rgbValues = [
    red,
    blue,
    green,
    pink,
    purple,
    violet,
]

// caches element references - parts of the dom we need to touch
const $background = $('#body');
const $click = $('#click');
const $container = $('#container');

const clickMe = document.getElementById("body");

// Event listeners
$click.on('click', changeColor);

// This function generates a random integer in range 0 to rgbValues.length and 
// sets the HTML body's background color to a random index value in the rgbValues object
function changeColor(){
    const randomColor = Math.floor(Math.random() * rgbValues.length)
    clickMe.style.background = rgbValues[randomColor];
};

