// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("nav_item"); // HTMLCollection
console.log(navItems[0]);
console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);