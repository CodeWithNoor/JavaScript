// Difference between dot and bracket notation

let key = "Email"
let Emp = {
    Name: "Abbas", 
    Age: 23,
    Passion: ["Coding", "Traveling"]
};

// Both are same to print Employee name
Emp[key] = "123@gmail.com"

console.log(Emp);
console.log(Emp.Name);
console.log(Emp["Name"]);