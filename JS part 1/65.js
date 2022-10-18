// splice method
// start, delete, insert
// deleted item return something

const myArray = [1, 2, 3, "Abbas"];

// ********* start, delete, insert *****************
myArray.splice(0, 3, "Harshit");
console.log(myArray);

// ******************************************************
const myobj = [
    {project: 1, product: "PC", price: 62000},
    {project: 2, product: "Laptop", price: 92000},
    {project: 3, product: "Mobile", price: 22000}
]

myobj.splice(0, 3, "Nothing"); 
console.log(myobj);