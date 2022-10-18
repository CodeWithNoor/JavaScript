// JavaScript is called a lexical scope language.
// Execution create context provide browser. 
// Global execution context add stack. 

console.log(this);
console.log(window);
console.log(myfunction);


function myfunction()
{
    console.log("This is my function");
}

var first_Name = "Noor";
var last_Name = "Fatima";

var full_Name = first_Name + " " + last_Name;
console.log(full_Name);