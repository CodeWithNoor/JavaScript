// select element using query selector
// select element using get element by Class Name, Id, query
// return object

// ************* By Id ************
// const mainHeading = (document.getElementById("main-heading"));


// ************* By Class Name ************
// console.log(document.getElementsByClassName("btn btn-headline"));
// console.dir(document.getElementsByClassName("btn btn-headline"));


// ************* By query ************
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const signup_form = document.querySelector(".signup-form");
console.log(signup_form);

// const nav_items = document.querySelector(".nav_item");

// Select all unordered list element
const nav_items = document.querySelectorAll(".nav_item");
console.log(nav_items);
