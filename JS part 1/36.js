// Object are refrence data type
// Array are good but not sufficient for real world data
// Object store key value pair
// Object don't have index

// How to create objects
// Object keys are used in string it's your choice
let person = 
{
    Name: "Abbas",
    "Age": 23,
    Passion: "Web_Developer",
    Hobbies: ["Coding", "Traveling"]
};

// how to add key value pair to objects
person.Gender= "Male";

console.log(person);

// How to access data from objects
console.log(person.Name);
console.log(person.Age);
console.log(person.Passion);
console.log(person["Hobbies"]);
console.log(person.Gender);
