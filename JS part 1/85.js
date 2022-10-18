// JS of method type take a prototype 


// let name = new Array(["item1", "item2", "item3", "item4", "item5", "item6"]);

// console.log(Array.prototype)
// console.log(name);

// Find prototype in array
// name prototype --> array 

let names = ["item1", "item2", "item3", "item4", "item5", "item6"];
console.log(Object.getPrototypeOf(names));
console.log(names);

// function prototype --> object
function hello()
{
    console.log("Hello...!");
}

console.log(hello.prototype)

// ***************************************************************
// function hello()
// {
//     console.log("Hello...!");
// }

// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);

// hello.prototype.push = [1];
// console.log(hello.prototype);