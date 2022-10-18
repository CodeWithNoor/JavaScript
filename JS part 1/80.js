// Function combo object in JavaScript

// JavaScript function === function + object
function hello()
{
    console.log("Hello...!");
}

// let hello = ["Abbas"]; --> prototype not present

// hello();
// console.log(hello.name); // --> Give a function name

// You can add your own properties
hello.selfproperty = 4 + 5;
console.log(hello.selfproperty);

// Name property --> tells function name

// Function provide most useful property
// Function provide call, apply, bind method

// Function gives a free space --> actually ma free space jese kuch nhi hota free space ma empty object {} ko bol raha hai.

// {} --> muft ka space or wo space prototype hai
console.log(hello.prototype); // {} --> it is a object

// Prototype property only functions provide

// Check my function is prototype or not

if(hello.prototype)
{
    console.log("Prototype is present");
} else{
    console.log("Prototype is not present");
}

// Add prototype property
hello.prototype.name = ["Abbas"];
hello.prototype.name_1 = ["Noor"];
hello.prototype.add = function(num1, num2)
{
    console.log(num1 + num2); 
}
console.log(hello.prototype);
hello.prototype.add(2,6);