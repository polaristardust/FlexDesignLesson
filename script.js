// Exercise 1: 
// make toggle equal the item with the class 'toggle'
// and menu equal the item with the class 'menu'
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Exercise 2:
// make a function called 'toggleMenu' that 
// writes 'working' to the console

let toggleMenu = function(){
    console.log("working");
}

// Exercise 3:
// Add an event listener to the toggle element
// to run the toggleMenu function

toggle.addEventListener("click", toggleMenu);