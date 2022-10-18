// Object Oriented Programming

// Proto --> chain create refrence
// prototype --> object
// ********************************************************************************************************************************

//                   Prototype
// **************************************************
// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// ****************************************************************
// Adding Properties and Methods to Objects.
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.

// *****************************************************************
// Using the prototype Property.
// The JavaScript prototype property allows you to add new properties to object constructors:

// This is Normal Function and We Can Treat it as Function and Object 
// Function Gives us a Empty Object and We can add our own properties and its values in prototype using .prototype

// let userMethod = {
//     about : function()
//     {
//         return `${this.name} & age is ${this.age}`;
//     },
//     about_goal : function()
//     {
//         return "Full Stack Developer";
//     }
// }

// Object.create set of proto property

function createUser (name, age, passion)
{
    let person = Object.create(createUser.prototype)
    person.name = name;
    person.age = age;
    person.passion = passion;
    return person;
}
  
// usermethod Add prototype property
createUser.prototype.about = function()
{
    return `${this.name} & age is ${this.age}`;
}

createUser.prototype.about_goal = function()
{
    return "Full Stack Developer";
}

// Check it is prototype or not
// console.log(createUser.prototype);

// *********************************************************
const user = createUser("Abbas",23, "Web Developer");
const user1 = createUser("Null", 20, "Web Developer");

console.log(user);
console.log(user1);
console.log(user.about());
console.log(user1.about());
console.log(user.about_goal());

