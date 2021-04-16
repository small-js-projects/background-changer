const red = '#80ced6'
const blue = '#d5f4e6'
const green = '#f18973'
const pink = '#ff57b9'
const purple = '#a0a2ff'
const violet = '#6dfffa'

const rgbValues = [
    red,
    blue,
    green,
    pink,
    purple,
    violet,
]



const $background = $('#body');
const $click = $('#click');
const $container = $('#container');

const clickMe = document.getElementById("body");

// Event listeners

$click.on('click', changeColor);



function changeColor(){
    const randomColor = Math.floor(Math.random() * rgbValues.length)
    clickMe.style.background = rgbValues[randomColor];
};

