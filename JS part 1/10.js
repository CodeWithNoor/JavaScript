// template string
let age = 23;
let name = "Abbas";

// both work are same
let aboutMe = "My name is " + name + " and My age is " + age;
console.log(aboutMe);

let about = `My name is ${name} and My age is ${age}`;
console.log(about);