// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property

// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);

// we can't use forEach method to iterate through HTMLCollection
// simple for of loop
// for of loop
// forEach method

// ************************************************************
// **************** HTML Collection *****************

// ************** For Loop ********************* 
// for(let i = 0; i < navItems.length; i++)
// {
//     const nav = navItems[i];
//     nav.style.Color = "white";
//     nav.style.backgroundColor = "green";
//     nav.style.margin = "9px 9px"
//     console.log(nav);
// }

// ************** For Of Loop ********************* 
// for(let key of navItems)
// {
//     key.style.Color = "white";
//     key.style.backgroundColor = "green";
//     key.style.margin = "9px 9px"
//     console.log(key);
// }

// ************** forEach method ********************* 
// TypeError: forEach is not a function

// How to change HTML collection 

// navItems = Array.from(navItems) // --> HTML collection remove and workwithout any error
// console.log(Array.isArray(navItems));

// navItems.forEach((key) => {
//     key.style.Color = "white";
//     key.style.backgroundColor = "green";
//     key.style.margin = "9px 9px"
//     console.log(key);
// });

// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// ************************************************************
// **************** Node List *****************
let navItems = document.querySelectorAll("a"); // HTMLCollection
console.log(navItems);

// simple for of loop
// for of loop
// forEach method

// ************** For Loop ********************* 
// for(let i = 0; i < navItems.length; i++)
// {
//     const nav = navItems[i];
//     nav.style.Color = "white";
//     nav.style.backgroundColor = "green";
//     nav.style.margin = "9px 9px"
//     console.log(nav);
// }

// ************** For Of Loop ********************* 
// for(let key of navItems)
// {
//     key.style.Color = "white";
//     key.style.backgroundColor = "green";
//     key.style.margin = "9px 9px"
//     console.log(key);
// }

// ************** forEach method ********************* 
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));

navItems.forEach((key) => {
    key.style.Color = "white";
    key.style.backgroundColor = "green";
    key.style.margin = "9px 9px"
    console.log(key);
});