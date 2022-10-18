// 2015 / es6
// class --> property and method define one place
// Class keyword
// Class are fake
// Always call the new keyword

class createUser{
    constructor(name, age, passion){
    this.name = name;
    this.age = age;
    this.passion = passion;
    }

    about = function()
    {
    console.log( `${this.name} & age is ${this.age} and achieveing goals`);
    }

    about_goal = function()
    {
    console.log("Full Stack Developer");
    }

    addition = function(num1, num2)
    {
        console.log(num1 + num2)
    }
}

// ***********************************************************
// function createUser (name, age, passion)
// {
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
// }
  

// createUser.prototype.about = function()
// {
//     console.log( `${this.name} & age is ${this.age} and achieveing goals`);
// }

// createUser.prototype.about_goal = function()
// {
//     console.log("Full Stack Developer");
// }

// new keyword without object cannot be created
const user = new createUser("Abbas",23, "Web Developer");
const user1 = new createUser("Null", 20, "Web Developer");

console.log(user);
// console.log(user.name);
// console.log(user.age);
console.log(user1);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.age);
user1.addition(5,6);

// *** check the prototype ***
console.log(Object.getPrototypeOf(user))