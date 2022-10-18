// new keyword
// How to search use new keyword the solution is use first letter is capital

// The new Keyword create relation between functions and set automatically values of function. 
// The New Keyword Create this object and Return this Object 

//   __prototype__
// official ecmascript
// [[prototype]]

function createUser (name, age, passion)
{
    this.name = name;
    this.age = age;
    this.passion = passion;
}
  

createUser.prototype.about = function()
{
    console.log( `${this.name} & age is ${this.age} and achieveing goals`);
}

createUser.prototype.about_goal = function()
{
    console.log("Full Stack Developer");
}


const user = new createUser("Abbas",23, "Web Developer");
const user1 = new createUser("Null", 20, "Web Developer");

console.log(user);
console.log(user1);

// Next tut more clarify for proto and prototype