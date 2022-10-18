// Array important methods

// Reduce
// Filter
// forEach
// Map

// let numbers = [1,2,3,4];

// function sum(numbers, index)
// {
//     console.log(`Index is ${index} and numbers is ${numbers}`);
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     sum(numbers[i], i);
// }

// ********************** Simple method ***********************

let numbers = [1,2,3,4];

function sum(numbers, index)
{
    console.log(`Index is ${index} and numbers is ${numbers}`);
}

numbers.forEach(sum); // For.each take a argument callback function 

// ********************** Simple method ***********************

let array = ["harshit", "sharma", null, undefined];

function my_func(array, index)
{
    console.log(`Index is ${index} and name is ${array}`);
}

array.forEach(my_func); 

// ********************** Simple method ***********************
let user = [
    {name: "kartik", id : "bc210000", passion : "Web_Developer"},
    {name: "naira", id : "bc2100337", passion : "Web_Developer"}
];

// user.forEach(function(users)
// {
// console.log(`name : ${users.name}, id : ${users.id}, passion : ${users.passion} `)
// })

for(const users of user) // try to for of loop
{
        console.log(`name : ${users.name}, id : ${users.id}, passion : ${users.passion} `)
}